import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleWare } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// middleware
app.use((req, res, next) => {
  console.log("-------------- START --------------");
  next();
});
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
    // 이 코드가 없다면: session data는 server에 저장됨 => Data가 자꾸 사라짐
    // session data를 mongoDB에 저장하기! (server를 죽여도, re-render해도 유지됨)
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/youtubeclone",
    }),
  })
);

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    console.log(sessions);
    next();
  });
});

app.use(localsMiddleWare); // after session middleware
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", rootRouter);

export default app;
