import express from "express";

// create application
const PORT = 4000;
const app = express();

// configure application
app.get("/", () => console.log("Somebody is trying to go home"));

// open the application to the outside world
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
