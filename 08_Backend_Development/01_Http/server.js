const http = require("http");

function handlefunction(req, res) {
  switch (req.method) {
    case "GET":
      {
        if (req.url === "/") return res.end("home page");
        if (req.url === "/about") return res.end("about");
        if (req.url === "/contact") return res.end("contact");
      }
      break;
    case "POST": {
    }
  }
}

const server = http.createServer(handlefunction);

server.listen(3000, () => {
  console.log("Server is running");
});