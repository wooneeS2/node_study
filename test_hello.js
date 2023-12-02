//실행 명령어 : k6 run test_hello.js
import http from "k6/http";

//테스트 옵션
//100명이 10초 동안 아래 주소에 동시에 계속해서 요청을 보낸다는 의미.
export const options = {
  vus: 100,
  duration: "10s",
};

//테스트에 사용할 함수 지정
export default function () {
  http.get("http://localhost:8000");
}

// 모든 요청은 비동기로 처리됨.
// 싱글 스레드이면서 동시에 여러 요청을 비동기로 처리.
