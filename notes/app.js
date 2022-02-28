// const fs = require("fs");

// fs.writeFileSync("node.txt", "This is file created by node.js");

// fs.open("node.txt", "a", (err, fd) => {
//   if (err) throw err;
//   fs.appendFile(fd, "\nanother data", "utf8", (err) => {
//     fs.close(fd, (err) => {
//       if (err) throw err;
//     });
//     if (err) throw err;
//   });
// });
// import validator from "validator";
// import { name, add } from "./utils.js";
// import chalk from 'chalk';
const yargs = require("yargs");
const notes = require("./notes.js");
// console.log(name, ">>", add(1, 4));
// console.log(validator.isEmail("jsjjs"));
// console.log(chalk.green("Success!"));
// console.log(chalk.red("Error!"));

// add note
yargs.command({
  command: "add",
  describe: "Adding notes",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// remove note
yargs.command({
  command: "remove",
  describe: "Removing notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// list nodes
yargs.command({
  command: "list",
  describe: "Listing notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler() {
    notes.getNotes();
  },
});

// read note
yargs.command({
  command: "read",
  describe: "Reading note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
