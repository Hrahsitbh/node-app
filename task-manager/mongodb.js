const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const database = "mongo";

const id = new ObjectId();
console.log(id);

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect databse", error);
    }
    const db = client.db(database);
    // Create Ops
    // db.collection("tasks").insertOne(
    //   {
    //     description: "Make bed",
    //     completed: true,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.acknowledged);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Clean house",
    //       completed: true,
    //     },
    //     {
    //       description: "Dishes",
    //       completed: false,
    //     },
    //     {
    //       description: "Dinner",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks");
    //     }
    //     console.log(result);
    //   }
    // );

    // Read Ops
    // db.collection("tasks").findOne(
    //   {
    //     description: "Clean house",
    //   },
    //   (error, task) => {
    //     if (error) {
    //       return console.log("Unable to fetch tasks");
    //     }
    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({
    //     completed: true,
    //   })
    //   .toArray((error, task) => {
    //     if (error) {
    //       return console.log("Unable to fetch tasks");
    //     }
    //     console.log(task);
    //   });

    // Update Ops
    // const updatePromise = db.collection("tasks").updateOne(
    //   {
    //     _id: new ObjectId("61d899f22935c898b24ec255"),
    //   },
    //   {
    //     $set: { completed: false },
    //   }
    // );
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     { $set: { completed: true } },
    //     { upsert: true }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // delete Ops
    db.collection("tasks")
      .deleteMany({
        completed: false,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
