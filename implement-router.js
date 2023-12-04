const http = require("http");

//url 모듈을 로딩하고 url qustndp gkfekd
const url = require("url");

http
  .createServer((req, res) => {
    //url 모듈을 사용해 요청으로 받은 url의 Pathname 얻기
    //true는 쿼리 스트링도 함께 파싱할지 여부 설정
    const path = url.parse(req.url, true).pathname;

    res.setHeader("Content-Type", "text/html");

    if (path === "/user") {
      user(req, res);
    } else if (path === "/feed") {
      feed(req, res);
    } else {
      res.statusCode = 404;
      notFound(req, res);
    }
  })
  .listen("3000", () => console.log("Make router!"));

const user = (req, res) => {
  res.end("[user] name : andy, age:30");
};

const feed = (req, res) => {
  res.end(`<ul> <li>picture</li><li>hello</li></ul>`);
};

const notFound = (req, res) => {
  res.end("404 page not found");
};
