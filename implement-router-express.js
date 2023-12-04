const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("refactoring with express");
});

app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

//호이스팅을 사용하기 위해 funtion 함수 사용
function user(req, res) {
  const userInfo = url.parse(req.url, true).query;
  res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
}

function feed(_, res) {
  res.json(`<ul> <li>picture</li><li>hello</li></ul>`);
}
