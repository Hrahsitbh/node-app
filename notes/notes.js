const fs = require("fs");
const chalk = require("chalk");
// console.log(name, ">>", add(1, 4));
// console.log(validator.isEmail("jsjjs"));
// console.log(chalk.green("Success!"));
// console.log(chalk.red("Error!"));
// helpers
const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch {
    return [];
  }
};
const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const getNotes = () => {
  console.log(chalk.inverse("All notes:-"));
  const notes = loadNotes();
  notes.forEach((item) => console.log(item.title));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((item) => item.title === title) || {};
  debugger;
  if (Object.keys(duplicateNotes).length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("Note added");
  } else {
    console.log(chalk.red.inverse("Title is taken"));
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((item) => item.title !== title);
  if (newNotes.length !== notes.length) {
    console.log(title, chalk.green.inverse("Note removed"));
    saveNotes(newNotes);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const readNote = (title) => {
    const notes = loadNotes();
    const specifiedNote = notes.find((item) => item.title === title) || {};
    if (Object.keys(specifiedNote).length > 0) {
      console.log(specifiedNote);
    } else {
      console.log(chalk.red.inverse("Not found"));
    }
  };

module.exports = {
  addNote,
  getNotes,
  removeNote,
  readNote,
};
