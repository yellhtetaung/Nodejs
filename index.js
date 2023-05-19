const fs = require("fs");

console.log("start program");

// const note = fs.readFileSync("./node.txt");
// console.log(note.toString());

fs.readFile("./node.txt", (error, data) => {
  if (error) throw error;
  console.log(data.toString());
});

console.log("end program");
