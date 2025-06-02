// const fs = require("fs");
// const http = require(http);

// ///////////////////////////
// // FILESs

// // const textIn = fs.readFileSync("./final/txt/input.txt", "utf-8");
// // console.log(textIn);

// // const textOut = `This is what we now know as the avocado ${textIn}./nCreated on ${Date.now()}`;
// // fs.writeFileSync("./final/txt/output.txt", "textOut");
// // console.log('file written');

// // fs.readFile("./final/txt/start.txt", "utf-8", (err, data1) => {
// //   if (err) return console.log("ERROR!");
// //   fs.readFile(`./final/txt/${data1}.txt`, "utf-8", (err, data2) => {
// //     console.log(data2);
// //     fs.readFile("./final/txt/append.txt", "utf-8", (err, data3) => {
// //       console.log(data3);

// //       fs.writeFile(
// //         "./final/txt/final.txt",
// //         `${data2}n/${data3}`,
// //         "utf-8",
// //         (err) => {
// //           console.log("you file has been written");
// //         }
// //       );
// //     });
// //   });
// // });
// // console.log("will read file");

// ///////////////////////////
// // SERVER
// const server = http.createServer((req, res) => {
//   res.end('Hello from the server');
// });

// server.listen(8000, '127.0.0.1', () => {
//   console.log('listening to request on port 8000')
// });


const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from the server');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
