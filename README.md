# 🌐 Node.js Networking Projects

A complete collection of networking projects built using Node.js core modules like:

- `dgram`
- `net`
- `http`
- `https`

This repository helps beginners understand:

- UDP Communication
- TCP Communication
- HTTP & HTTPS Servers
- File Transfer
- Request/Response Handling
- Networking Fundamentals

---

# 📚 Topics Covered

## ✅ UDP Networking

- UDP Server
- UDP Client
- Transferring Files Using UDP

---

## ✅ TCP Networking

- TCP Server
- TCP Client-Server Communication
- TCP Multi-Client Server
- TCP File Transfer

---

## ✅ HTTP Networking

- Creating HTTP Server using Node.js
- HTTP Headers
- Important Response Headers
- HTTP Request Methods
- Creating HTTP Client
- Anatomy of HTTP Request & Response

---

## ✅ HTTPS Networking

- Creating HTTPS Server

---

## ✅ Performance & Monitoring

- Controlling Data Transfer Speeds
- Inspecting TCP Data Transfer Speeds

---

# 📂 Project Structure

```bash
NetworkNodeJs/
│
├── UDP/
│   ├── udp-server.js
│   ├── udp-client.js
│   └── udp-file-transfer.js
│
├── TCP/
│   ├── tcp-server.js
│   ├── tcp-client.js
│   ├── tcp-multi-client.js
│   └── tcp-file-transfer.js
│
├── HTTP/
│   ├── http-server.js
│   ├── http-client.js
│   └── headers.js
│
├── HTTPS/
│   └── https-server.js
│
├── package.json
└── README.md
```

---

# ⚙️ Requirements

- Node.js installed
- VS Code (Recommended)

Check version:

```bash
node -v
```

---

# 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/NetworkNodeJs.git
```

Move into the project folder:

```bash
cd NetworkNodeJs
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Running Projects

## Start UDP Server

```bash
node udp-server.js
```

## Run UDP Client

```bash
node udp-client.js
```

---

## Start TCP Server

```bash
node tcp-server.js
```

## Run TCP Client

```bash
node tcp-client.js
```

---

## Start HTTP Server

```bash
node http-server.js
```

Open browser:

```bash
http://localhost:3000
```

---

## Start HTTPS Server

```bash
node https-server.js
```

---

# 🧠 Concepts You Will Learn

- Socket Programming
- Networking Basics
- UDP vs TCP
- Client-Server Architecture
- HTTP Communication
- HTTPS Security
- Data Streaming
- File Transfer
- Headers & Methods

---

# 📌 UDP vs TCP

| Feature | UDP | TCP |
|---|---|---|
| Speed | Fast | Slower |
| Reliability | No | Yes |
| Connection | Connectionless | Connection-oriented |
| Use Case | Streaming, Games | Web, File Transfer |

---

# 📡 Example Workflow

```text
Client  --->  Server
Server  --->  Response
```

---

# 🛠 Common Errors

## Port Already in Use

Error:

```bash
EADDRINUSE
```

Fix:

- Change port number
- Stop existing server

---

## Connection Refused

Fix:

- Start server first
- Check IP address & port

---

# 🌟 Future Improvements

- Real-time Chat App
- Video Streaming
- WebSocket Integration
- Authentication
- Encryption
- GUI Dashboard

---

# 👨‍💻 Author

## Fulbabu Islam

B.Tech CSE Student  
Networking & Backend Developer

---

# ⭐ Support

If you found this repository helpful:

- Star the repository
- Fork the project
- Contribute improvements

---

# 📜 License

This project is open-source and available for learning purposes.
