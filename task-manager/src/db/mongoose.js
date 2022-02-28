const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
});


// const user = new User({
//   name: "Mike ",
//   email: " Tapss@mail.com ",
//   password: "    jdh21psrs!  ",
// });

// user
//   .save()
//   .then(() => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const Tasks = new mongoose.model("Tasks", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const tasks = new Tasks({
//   description: "Learn Something",
//   //   completed: true,
// });

// tasks
//   .save()
//   .then(() => console.log(tasks))
//   .catch((error) => {
//     console.log(error);
//   });
