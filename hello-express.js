//express 모듈 불러오기
const express = require("express");

//express 초기화 후 app에 할당
const app = express();

const port = 3000;

// "/"으로 요청이 들어오는 경우 실행됨
app.get("/", (req, res) => {
  res.set({ "Content-Type": "text/html; charset=utf-8" });
  res.end("hello Express");
});

//서버 기동 후 클라이언트 요청 기다림
app.listen(port, () => {
  console.log(`Start server : use ${port}`);
});
