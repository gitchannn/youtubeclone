const { default: fetch } = require("node-fetch");

const hello = async () => {
  alert("hi! it's working");
  const x = await fetch("");
};
hello();
