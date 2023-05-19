const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const url = req.url;

    if (url == "/") {
      fs.readFile("./page/index.html", (error, data) => {
        if (error) throw error;
        res.write(data);
        res.end();
      });
    } else if (url == "/about") {
      fs.readFile("./page/about.html", (error, data) => {
        if (error) throw error;
        res.write(data);
        res.end();
      });
    } else if (url == "/contact") {
      fs.readFile("./page/contact.html", (error, data) => {
        if (error) throw error;
        res.write(data);
        res.end();
      });
    }
  })
  .listen(4000, () => {
    console.log("Server is running on port 4000");
  });
