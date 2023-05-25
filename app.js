// import fs from "fs"; //Impoting node package fs
// import http from "http"; // Will host our URL

// const port = 4000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     console.log(req.url);
//     res.writeHead(200, { "Content-Type": "text/html" });
//     fs.readFile("./index.html", (err, data) => {
//       if (err) throw err;
//       res.write(data);
//       res.end();
//     });
//   }
// });

// if (req.url === ("/api") {
//     console.log(req.url)
// res.writeHead(200, { "Content-Type": "text/html" })
// fs.readFile("./cat2.html", (err,data)=>{
//     if(err) throw err;
//     res.write(data);
//     res.end();
// })};

// server.listen(port, (err)=> {
//     if(err) console.log("ERROR", err.message);
//     console.log(`LISTENING on port ${port}`)
// })

import fs from "fs";
import http from "http";

const port = 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./index.html", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }

  if (req.url === "/api") {
    console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./cat2.html", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, (err) => {
  if (err) console.log("ERROR", err.message);
  console.log(`LISTENING on port ${port}`);
});
