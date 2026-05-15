// ============================= Node.js Network Modules =============================

// {
//     "type": "module"
// }


//============================= UDP -Server =================================


// import dgram from "node:dgram"; //UDP

// const socket = dgram.createSocket("udp4");

// socket.on("message", (message, remoteAddress) => {
//   console.log(message.toString());
//   console.log(remoteAddress);
//   socket.close();
// });

// socket.send("Hi from Client.js", 4000, "192.168.87.41", () => {
//   console.log("Message sent");
// });

//============================= Transferring Files Using UDP =============================

// import dgram from "node:dgram"; //UDP
// import { createReadStream } from "node:fs";
// import { readFile } from "node:fs/promises";

// const socket = dgram.createSocket("udp4");

// socket.on("message", (message, remoteAddress) => {
//   console.log(message.toString());
//   console.log(remoteAddress);
//   socket.close();
// });

// const readStream = createReadStream(
//   "C:\\Users\\anura\\OneDrive\\Desktop\\Story of Internet.mp4",
//   { highWaterMark: 1000 }
// );

// readStream.on("data", (chunk) => {
//   socket.send(chunk, 4000, "192.168.0.105");
// });

// readStream.on("end", () => {
//   socket.send("EOF", 4000, "192.168.0.105", () => {
//     console.log("Message sent");
//   });
// });



//============================= TCP Client-Server =============================

// import net from "node:net";

// const socket = net.createConnection({ host: "192.168.56.1", port: 4000 });

// socket.on("error", () => {
//   console.log("Server Lost");
// });

// setTimeout(() => {
//   socket.write("Hii");
//   socket.end();
// }, 2000);

// socket.on("data", (chunk) => {
//   console.log(chunk.toString());
// });


//============================= TCP Multi-Client Server  ============================


// import net from "node:net";

// process.stdin.on("data", (input) =>{
//   socket.write(input)
// });

// const socket = net.createConnection({ host: "192.168.56.1", port: 4000 });

// socket.on("error", () => {
//   console.log("Server Lost");
// });

// socket.on("data", (chunk) => {
//   console.log(chunk.toString());
// });



// ============================= TCP File Transfer Client =============================


// import { createReadStream, createWriteStream } from "node:fs";
// import net from "node:net";

// process.stdin.on("data", (input) => {
//   const inputString = input.toString().trim();
//   console.dir(inputString);
//   if (inputString === "send") {
//     const readStream = createReadStream(
//       "C:\\Users\\anura\\OneDrive\\Desktop\\Story of Internet.mp4"
//     );

//     readStream.pipe(socket);
//     readStream.on("end", () => {
//       console.log("File ended");
//     });
//   }
// });

// const socket = net.createConnection({ host: "192.168.0.105", port: 4000 });

// const writeStream = createWriteStream(
//   "C:\\Users\\anura\\OneDrive\\Desktop\\my-story.mp4"
// );

// const readStream = createReadStream(
//   "C:\\Users\\anura\\OneDrive\\Desktop\\Story of Internet.mp4"
// );

// readStream.pipe(socket);
// readStream.on("end", () => {
//   console.log("File ended");
// });

// socket.on("error", () => {
//   console.log("Server Lost");
// });

// socket.on("data", (chunk) => {
//   writeStream.write(chunk);
// });


//=============================  Creating HTTP client  =============================

// import http from "http";

// const clientRequest = http.request({
//   method: "POST",
//   hostname: "192.168.56.1",
//   port: 4000,
//   path: "/file.txt",
// });

// clientRequest.end("Hii I am client");

// clientRequest.on("response", (response) => {
//   response.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });
// });

