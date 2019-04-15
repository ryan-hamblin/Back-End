define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_conco_Desktop_LambdaSchool_week15_build_Back_End_docs_main_js",
    "groupTitle": "C__Users_conco_Desktop_LambdaSchool_week15_build_Back_End_docs_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "api/classrooms/",
    "title": "Create a classroom",
    "version": "0.1.0",
    "name": "postClassroom",
    "group": "Classrooms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users auth token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of classroom</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"name\":\"first class room\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the classroom</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the classroom</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "classroom_admin_user_ids",
            "description": "<p>List of group's admins by id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"id\": \"1\",\n  \"name\": \"first class room\",\n  \"classroom_admin_user_ids\": [2]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: Not all fields",
          "content": "HTTP/1.1 401 BAD REQUEST\n{\n  \"message\": \"All fields required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: Name in use",
          "content": "HTTP/1.1 403 FORBIDDEN\n{\n  \"message\": \"classroom name is already in use\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/routers/classroom-router.js",
    "groupTitle": "Classrooms"
  },
  {
    "type": "post",
    "url": "api/classrooms/:id/projects",
    "title": "Add a project to a classroom",
    "version": "0.1.0",
    "name": "postClassroomProject",
    "group": "Classrooms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users auth token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>The project_id of the project to get added to classroom</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"project_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the classroom project</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: Not all fields",
          "content": "HTTP/1.1 401 BAD REQUEST\n{\n  \"message\": \"All fields required\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/routers/classroom-router.js",
    "groupTitle": "Classrooms"
  },
  {
    "type": "get",
    "url": "api/projects/",
    "title": "Get all projects",
    "version": "0.1.0",
    "name": "getProjects",
    "group": "Projects",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users auth token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "projects",
            "description": "<p>A array of projects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"1\",\n    \"name\":\"first project\",\n    \"description\": \"This is a long and boring project.\"\n  },\n   {\n    \"id\": \"2\",\n    \"name\":\"second project\",\n    \"description\": \"This is a sort and fun project.\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: Unauthorized",
          "content": "HTTP/1.1 403 FORBIDDEN\n{\n  \"message\": \"No valid credentials provided\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/routers/project-router.js",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "api/projects/",
    "title": "Create a project",
    "version": "0.1.0",
    "name": "postProjects",
    "group": "Projects",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users auth token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of project</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the project</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"name\":\"this project\",\n \"description\": \"This is a long and boring project.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the project</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"id\": 1,\n  \"name\":\"this project\",\n  \"description\": \"This is a long and boring project.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: Not all fields",
          "content": "HTTP/1.1 401 BAD REQUEST\n{\n  \"message\": \"All fields required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: Name in use",
          "content": "HTTP/1.1 403 FORBIDDEN\n{\n  \"message\": \"Project already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/routers/project-router.js",
    "groupTitle": "Projects"
  },
  {
    "type": "put",
    "url": "api/auth/login",
    "title": "Login a user",
    "version": "0.1.0",
    "name": "loginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"email\":\"connor@gmail.com\",\n \"password\":\"1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>The type of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"name\": \"connor\",\n  \"email\": \"connor@hotmail.com\",\n  \"user_type\": \"student\",\n  \"token\": \"GHFHJUI#Y$SAHDJKHA\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: Bad credentials",
          "content": "HTTP/1.1 401 UNAUTHORIZED\n{\n  \"message\": \"Bad credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: Missing credentials",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"message\": \"Email and password are required\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/routers/auth-router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/auth/register",
    "title": "Register a user",
    "version": "0.1.0",
    "name": "registerUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_type_id",
            "description": "<p>Id of the user type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"name\":\"connor\",\n \"email\":\"connor@gmail.com\",\n \"password\": \"1234\",\n \"user_type_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>The type of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Auth Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"name\": \"connor\",\n  \"email\": \"connor@hotmail.com\",\n  \"user_type\": \"student\",\n  \"token\" : \"hdf78623rhfkjsdhkf\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: Not all fields",
          "content": "HTTP/1.1 401 BAD REQUEST\n{\n  \"message\": \"All fields required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: Email in use",
          "content": "HTTP/1.1 403 FORBIDDEN\n{\n  \"message\": \"Email is already in use\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/routers/auth-router.js",
    "groupTitle": "User"
  }
] });