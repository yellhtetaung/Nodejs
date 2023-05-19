const http = require("http");

http
  .createServer((req, res) => {
    res.end("Hello Nodjs");
  })
  .listen(4000, () => {
    console.log("Server is running on port 4000");
  });
