exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      name: "Team builder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper nunc lerisque mollis. Pellentesque enim erat, fringilla sed placerat sit amet, laoreet sit amet sem. Ut tincnisi cursus, aliquet massa nare libero. Pellentesque pulvinar ipsum massa, non rutrum sapien vestibulum eu. Proin pulvinar mi sed iaculis molestie."
    },
    {
      name: "NBA Stats",
      description:
        "Aliquam ut sollicitudin ligula, in sagittis magna. Pellentesque turpis nibh, porta ut augue scelerisque, fermentum pretium nibh. Suspendisse quis vestibulum ex. Phasellus dictum porta sem, quis ullamcorper dui maximus eget. Ut quis odio tempor nisl finibus lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque pharetra justo ac neque ultricies, nec faucibus velit dapibus. Suspendisse in enim sodales, tincmassa sed, tempus nisi. Quisque sodales, magna vel consequat fringilla, libero sem placerat ante, quis elementum arcu ante nec metus."
    },
    {
      name: "Gun Violence",
      description:
        "Vivamus varius sapien nec egestas pharetra. Aenean lorem leo, cursus em non, auctor pellentesque dolor. Suspendisse eget eros in elit dignissim venenatis. Pellentesque mauris elit, vehicula nec nisl nibus ornare lacus. Duis ut velit augue. Nulla facilisi. Proin ac est a nisl euismod suscipit."
    },
    {
      name: "Home Time",
      description:
        "Duis sit amet condimentum sapien. Nullam nec finibus lectus, eget viverra nulla. Integer blandit arcu ac finibus efficitur. Praesent quis mi eu velit euismod maximus in dapibus lacus. Donec massa quam, dapibus malesuada ipsum eget, egestas scelerisque ante. Nam sit amet sollicitudin nibh. Integer quis libero ullamcorper,"
    },
    {
      name: "Photo Gallery",
      description:
        "Vivamus varius sapien nec egestas pharetra. Aenean lorem leo, cursus em non, auctor pellentesque dolor. Suspendisse eget eros in elit dignissim venenatis. Pellentesque mauris elit, vehicula nec nisl nibus ornare lacus. Duis ut velit augue. Nulla facilisi. Proin ac est a nisl euismod suscipit."
    },
    {
      name: "Big data",
      description:
        "Duis sit amet condimentum sapien. Nullam nec finibus lectus, eget viverra nulla. Integer blandit arcu ac finibus efficitur. Praesent quis mi eu velit euismod maximus in dapibus lacus. Donec massa quam, dapibus malesuada ipsum eget, egestas scelerisque ante. Nam sit amet sollicitudin nibh. Integer quis libero ullamcorper,"
    },
    {
      name: "Workout Tracker",
      description:
        "Duis sit amet condimentum sapien. Nullam nec finibus lectus, eget viverra nulla. Integer blandit arcu ac finibus efficitur. Praesent quis mi eu velit euismod maximus in dapibus lacus. Donec massa quam, dapibus malesuada ipsum eget, egestas scelerisque ante. Nam sit amet sollicitudin nibh. Integer quis libero ullamcorper,"
    },
    {
      name: "Game Room",
      description:
        "Duis sit amet condimentum sapien. Nullam nec finibus lectus, eget viverra nulla. Integer blandit arcu ac finibus efficitur. Praesent quis mi eu velit euismod maximus in dapibus lacus. Donec massa quam, dapibus malesuada ipsum eget, egestas scelerisque ante. Nam sit amet sollicitudin nibh. Integer quis libero ullamcorper,"
    },
    {
      name: "Living Big",
      description:
        "Vivamus varius sapien nec egestas pharetra. Aenean lorem leo, cursus id lorem non, auctor pellentesque dolor. Suspendisse eget eros in elit dignissim venenatis. Pellentesque mauris elit, vehicula nec nisl id, finibus ornare lacus. Duis ut velit augue. Nulla facilisi. Proin ac est a nisl euismod suscipit."
    }
  ]);
};
