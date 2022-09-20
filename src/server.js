import express from "express";

const PORT = 4000;

const app = express();
const logger = (req, res, next) => {
  console.log(`logger: ${req.method} ${req.url}`);
  next();
};
const privateMiddleWare = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    console.log("Not Allowed.");
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue...");
  next();
};
const handleHome = (req, res) => {
  // finalWare: return으로 인해 연결 종료
  console.log("finalWare: I'm the finalWare!");
  return res.send("I still love you");
};
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(logger);
app.use(privateMiddleWare);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
