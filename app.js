// ============================= Node.js Network Modules =============================

 // import dgram from "node:dgram"; // UDP
 // import net from "node:net"; // TCP
 // import http from "node:http";
 // import https from "node:https";
 // import dns from "node:dns";

// import os from 'node:os'

// const networkInterface = os.networkInterfaces()

// console.log(networkInterface);


//============================= UDP Server =============================


// import dgram from "node:dgram"; //UDP

// const socket = dgram.createSocket("udp4");

// socket.on("message", (message, remoteAddress) => {
//   console.log(message.toString());
//   console.log(remoteAddress);

//   socket.send(
//     "Message Received Successfully on Server.",
//     remoteAddress.port,
//     remoteAddress.address
//   );
// });

// socket.bind({ port: 4000 }, () => {
//   console.log(socket.address());
//   const address = socket.address();
//   console.log(`Listening on port ${address.port}`);
// });


//============================== Transferring Files Using UDP =============================

// import dgram from "node:dgram"; //UDP
// import { createWriteStream } from "node:fs";
// import { writeFile } from "node:fs/promises";

// const socket = dgram.createSocket("udp4");

// const writeStream = createWriteStream("numbers.mp4");
// socket.on("message", async (message, remoteAddress) => {
//   if (message.toString() === "EOF") {
//     socket.send(
//       "File Uploaded Successfully on the Server",
//       remoteAddress.port,
//       remoteAddress.address
//     );
//   } else {
//     writeStream.write(message);
//   }
// });

// socket.bind({ port: 4000 }, () => {
//   console.log(socket.address());
//   const address = socket.address();
//   console.log(`Listening on port ${address.port}`);
// });



//============================= TCP Server =============================

// import net from "node:net";

// const server = net.createServer();

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });

// server.on("connection", (socket) => {
//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//     socket.write("HTTP\n\nGot your message.");
//     socket.end();
//   });
//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });


// ============================= TCP Client-Server =============================

// import net from "node:net";

// const server = net.createServer((socket) => {
//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//     socket.write("HTTP\n\nGot your message.");
//     socket.end();
//   });
//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });

//   socket.on("error", () => {
//     console.log("Client Lost");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });



// ============================= TCP Multi-Client Server =============================
// import net from "node:net"; 

// process.stdin.on("data", (input) => {ṇ
//   const inputStr = input.toString();
//   const [clientIndex] = inputStr.split(" ");
//   console.log(clientIndex);
//   if (typeof parseInt(clientIndex) === "number") {
//     clientsList[parseInt(clientIndex)].write(inputStr.substring(1));
//   } else {
//     clientsList.forEach((socket) => {
//       socket.write(input);
//     });
//   }
// });

// const clientsList = [];

// const server = net.createServer((socket) => {
//   clientsList.push(socket);
//   console.log(clientsList.length);
//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//     clientsList.forEach((socket) => {
//       socket.write(chunk);
//     });
//   });
//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });

//   socket.on("error", () => {
//     console.log("Client Lost");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });



//============================= TCP File Transfer =============================


// import { createReadStream, createWriteStream, read } from "node:fs";
// import net from "node:net";

// process.stdin.on("data", (input) => {
//   const inputStr = input.toString();
//   const [clientIndex] = inputStr.split(" ");
//   console.log(clientIndex);
//   if (typeof parseInt(clientIndex) === "number") {
//     clientsList[parseInt(clientIndex)].write(inputStr.substring(1));
//   } else {
//     clientsList.forEach((socket) => {
//       socket.write(input);
//     });
//   }
// });

// const clientsList = [];

// const server = net.createServer((socket) => {
//   clientsList.push(socket);
//   console.log(clientsList.length);

  // const readStream = createReadStream("story.mp4");
  // readStream.pipe(socket);
  // readStream.on("end", () => {
  //   console.log("File ended");
  // });

  // const writeStream = createWriteStream("story.mp4");
  // socket.pipe(writeStream);
  // socket.on("data", (chunk) => {
  //   writeStream.write(chunk);
  //   console.log("got data");
  // });
  
//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });

//   socket.on("error", () => {
//     console.log("Client Lost");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });





// ============================= Creating HTTP Server using Net Module =============================


// import { createReadStream, createWriteStream, read } from "node:fs";
// import net from "node:net";

// process.stdin.on("data", (input) => {
//   const inputStr = input.toString();
//   const [clientIndex] = inputStr.split(" ");
//   console.log(clientIndex);
//   if (typeof parseInt(clientIndex) === "number") {
//     clientsList[parseInt(clientIndex)].write(inputStr.substring(1));
//   } else {
//     clientsList.forEach((socket) => {
//       socket.write(input);
//     });
//   }
// });

// const clientsList = [];

// const server = net.createServer((socket) => {
//   clientsList.push(socket);
//   console.log(clientsList.length);

//   // const readStream = createReadStream("story.mp4");
//   // readStream.pipe(socket);
//   // readStream.on("end", () => {
//   //   console.log("File ended");
//   // });

//   const writeStream = createWriteStream("story.mp4");
//   socket.pipe(writeStream);
//   // socket.on("data", (chunk) => {
//   //   writeStream.write(chunk);
//   //   console.log("got data");
//   // });
  
//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });

//   socket.on("error", () => {
//     console.log("Client Lost");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });


//============================ HTTP Heades  =============================

// import { createReadStream } from "node:fs";
// import net from "node:net";

// const server = net.createServer((socket) => {

//   socket.write("HTTP/1.1 200 OKAY\n");
//   socket.write("Access-Control-Allow-Origin: *\n");
//   socket.write("Access-Control-Expose-Headers: Hello, name\n");
//   socket.write("Hello: World\n");
//   socket.write("name: anurag");
//   socket.write("\n\n");

//   // socket.end();
//   const readStream = createReadStream("story.mp4");
//   // const readStream = createReadStream("river.webp");
//   // const readStream = createReadStream("numbers.txt");
//   // const readStream = createReadStream(
//   //   "C:\\Users\\anura\\OneDrive\\Desktop\\4k-video.MP4"
//   // );
//   readStream.pipe(socket);
//   readStream.on("end", () => {
//     console.log("File ended");
//   });

//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });

//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });

//   socket.on("error", () => {
//     console.log("Client Lost");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });


//============================ Important Response Headers  =============================

// import { open } from "node:fs/promises";
// import net from "node:net";

// const server = net.createServer(async (socket) => {
//   // const fileHandle = await open(
//   //   "C:\\Users\\anura\\OneDrive\\Desktop\\4k-video.MP4"
//   // );
//   const fileHandle = await open("story.mp4");
//   const { size } = await fileHandle.stat();
//   const readStream = fileHandle.createReadStream();
//   socket.write("HTTP/1.1 200 OKAY\n");
//   socket.write("Content-Type: video/mp4\n");
//   // socket.write("Content-Type: text/txt; charset=utf-8\n");
//   socket.write(`Content-Length: ${size}\n`);
//   socket.write("Content-Disposition: attachment; filename=story.mp4");
//   socket.write("\n\n");

//   // socket.end();
//   // const readStream = createReadStream("story.mp4");
//   // const readStream = createReadStream("river.webp");
//   // const readStream = createReadStream("numbers.txt");
//   // const readStream = createReadStream(
//   //   "C:\\Users\\anura\\OneDrive\\Desktop\\4k-video.MP4"
//   // );
//   readStream.pipe(socket);
//   // socket.end('{"name": "Anurag"}')
//   readStream.on("end", () => {
//     console.log("File ended");
//   });

//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });

//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });

//   socket.on("error", () => {
//     console.log("Client Lost");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });


//============================ Controlling Data Transfer Speeds =============================

// import { open } from "node:fs/promises";
// import net from "node:net";

// const server = net.createServer(async (socket) => {
//   const fileHandle = await open(
//     "C:\\Users\\anura\\OneDrive\\Desktop\\4k-video.MP4"
//   );
//   const { size } = await fileHandle.stat();
//   const readStream = fileHandle.createReadStream({ highWaterMark: 10 });
//   socket.write("HTTP/1.1 200 OKAY\n");
//   socket.write("Content-Type: video/mp4\n");
  // socket.write("Content-Type: text/txt; charset=utf-8\n");
  // socket.write(`Content-Length: ${size}\n`);
  // socket.write("Content-Disposition: attachment; filename=story.mp4");
  // socket.write("\n\n");

  // socket.end();
  // const readStream = createReadStream("story.mp4");
  // const readStream = createReadStream("river.webp");
  // const readStream = createReadStream("numbers.txt");
  // const readStream = createReadStream(
  //   "C:\\Users\\anura\\OneDrive\\Desktop\\4k-video.MP4"
  // );

  // readStream.pipe(socket);

  // readStream.on("pause", () => {
  //   console.log("stream paused by browser");
  // });

  // readStream.on("resume", () => {
  //   console.log("stream resumed by browser");
  // });

  // readStream.on("data", (chunk) => {
  //   socket.write(chunk);
  //   readStream.pause();
  //   setTimeout(() => {
  //     readStream.resume()
  //   }, 0)
  // });

  // socket.on("drain", () => {
  //   readStream.resume();
  // });

//   readStream.on("end", () => {
//     console.log("File ended");
//   });

//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });

//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });

//   socket.on("error", () => {
//     console.log("Client Lost");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });


//============================= In Specting TCP Data Transfer Speeds =============================

// import { open } from "node:fs/promises";
// import net from "node:net";

// const server = net.createServer(async (socket) => {
//   const fileHandle = await open("numbers.txt");
//   const { size } = await fileHandle.stat();
//   const readStream = fileHandle.createReadStream();
//   socket.write("HTTP/1.1 200 OKAY\n");
//   socket.write("Access-Control-Allow-Origin: *\n");
//   socket.write("Content-Type: text/txt; charset=utf-8\n");
//   socket.write(`Content-Length: ${size}\n`);
//   socket.write("\n\n");

//   readStream.pipe(socket);

//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });

//   socket.on("error", () => {
//     console.log("Client Lost");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });


//============================= Creating HTTPS Server using Net Module =============================


// import http from "node:http";

// const server = http.createServer((request, response) => {
//   console.log(request.method);
//   response.setHeader("Content-Length", "23");
//   response.write("Hello from http server.");
//   request.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });
//   //   response.end();
// });

// server.on("request", (request, response) => {
//   console.log("Got the request");
//   response.setHeader("Content-Length", "23");
//   response.write("Hello from http server.");
//   //   response.end();
// });

// server.on("connection", (socket) => {
//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });
//   socket.end("HTTP/1.1 200 OK\n\nHii from http server");
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started");
// });


//============================= HTTP Request Methods =============================

// import http from "node:http";

// const server = http.createServer((request, response) => {
//   console.log(request.method);
//   response.setHeader("Content-Length", "23");
//   response.write("Hello from http server.");
//   request.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });
//   //   response.end();
// });

// server.on("request", (request, response) => {
//   console.log("Got the request");
//   response.setHeader("Content-Length", "23");
//   response.write("Hello from http server.");
//   //   response.end();
// });

// server.on("connection", (socket) => {
//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });
//   socket.end("HTTP/1.1 200 OK\n\nHii from http server");
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started");
// });



//=============================  Creating HTTP client  =============================


// import http from "node:http";

// const server = http.createServer((request, response) => {
//   console.log("Got the request");
//   console.log(request.method);
//   console.log(request.url);
//   request.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });
//   response.end("Hello from http server.");
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started");
// });


//============================== Anatomy of HTTP Request and Response =============================

// import http from "node:http";

// const server = http.createServer((request, response) => {
//   console.log(request.method);
//   request.on("data", (chunk) => {
//     console.log("1");
//     console.log(chunk.toString());
//   });
//   response.statusCode = 200;
//   response.setHeader("Content-Length", "23");
//   response.write("Hello from http server.");
// });

// server.on("connection", (socket) => {
//   socket.on("data", (chunk) => {
//     console.log("2");
//     console.log(chunk.toString());
//   });
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started");
// });




