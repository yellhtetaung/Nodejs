const fs = require("fs");

console.log("start program");

const note = fs.readFileSync("./node.txt");
console.log(note.toString());

console.log("end program");
