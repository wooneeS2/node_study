//모듈을 읽어오는 함수
//모듈과 변수명은 같은 이름으로 짓는게 관행임.
const http = require("http");
let count = 0;

//서버 인스턴스를 만드는 함수
//인수는 콜백함수
//콜백 함수는 http 서버로 요청이 들어오면 해당 요청을 처리할 함수를 설정
//resoponse와 requuest를 객체 인수로 받음
const server = http.createServer((req, res) => {
  log(count);

  //요청에 대한 상태 코드를 200으로 설정
  res.statusCode = 200;

  //요청,응답에 대한 부가 정보 설정
  res.setHeader("Content-Type", "text/plain");

  //응답으로 hello\n 내려줌
  res.write("hello\n");
  setTimeout(() => {
    res.end("Node.js");
  }, 2000);
});

function log(count) {
  console.log((count += 1));
}

//사용할 포트 번호를 8000번으로 지정함.
server.listen(8000);
