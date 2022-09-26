export const localsMiddleWare = (req, res, next) => {
  //   console.log("!!! SESSION :", req.session);
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Youtube";
  res.locals.loggedInUser = req.session.user;
  console.log("!!! LOCALS :", res.locals);
  next();
};
