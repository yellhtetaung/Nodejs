const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("./page/index.html", (error, data) => {
      res.write(data);
      res.end();
    });
  })
  .listen(4000, () => {
    console.log("Server is running on port 4000");
  });
