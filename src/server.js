import express from "express";

const PORT = 4000;

const app = express();
const gossipMiddleWare = (req, res, next) => {
  console.log(`Someone is going to ${req.url}`);
  next();
};
const handleHome = (req, res) => {
  // finalWare: return으로 인해 연결 종료
  console.log("I'm the finalWare!");
  return res.send("I still love you");
};
const handleLogin = (req, res) => {
  return res.send("Login here.");
};

app.use(gossipMiddleWare);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
