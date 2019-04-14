const router = require("express").Router();
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET || "mellon";

const db = require("../data/dbConfig.js");
// const Users = require("../users/users-model.js");

router.post("/register", async (req, res) => {
  let { name, email, password, user_type_id } = req.body;

  try {
    if (name && email && password && user_type_id) {
      const hash = bcrypt.hashSync(password, 14);
      password = hash;

      const [id] = await db("users").insert({ ...req.body, password });
      const user = await db("users").where({ id }).first();
      const user_type = await db("user_types").where({ id: user.user_type_id }).first();

      res.status(201).json({
        message: `Registration successful!`,
        user: { id, name, email, user_type }
      });
    } else {
      res.status(400).json({
        message: "All fields are required"
      });
    }
  } catch (error) {
    if (error.errno === 19) {
      res.status(403).json({
        message: "Email is already in use"
      });
    } else {
      res.status(500).json(error);
    }
  }
});

router.put("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    if (email && password) {
      const user = await db("users").where({ email }).first();

      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.name}, you are now logged in`,
          token
        });
      } else {
        res.status(401).json({
          message: "Incorrect password"
        });
      }
    } else {
      res.status(400).json({
        message: "Email and password are required"
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.email
  };
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
