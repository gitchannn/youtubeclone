import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import apiRouter from "./routers/apiRouter";
import { localsMiddleWare } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 200000000, // milliseconds
    },
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
    }),
  })
);

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    next();
  });
});

app.use((req, res, next) => {
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

app.use(flash());
app.use(localsMiddleWare); // after session middleware
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets")); // please let people look at the assests file
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", rootRouter);
app.use("/api", apiRouter);

export default app;
