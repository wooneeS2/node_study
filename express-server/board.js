const express = require("express");
const app = express();

//게시글 리스트로 사용할 posts
let posts = [];

//JSON 미들웨어 활성화
//req.body를 사용하려면 JSON 미들웨어를 사용해야함.
//사용하지 않으면 undefined로 반환
// app.use()는 미들웨어를 사용할 때 사용하는 함수
//익스프레스에서 미들웨어는 요청과 응답 사이에 로직을 추가할 수 있는 함수를 제공함
// 요청이 들어오고 나갈 때 전후 처리를 지원하는 역할을 함
app.use(express.json());

// 콘텐트 타입이 application/x-www-form-unrlencoded인 경우 파싱
//해당 타입은 body에 키=값 조합 형태의 데이터임.
app.use(express.urlencoded({ extended: true }));

// /로 요청이 오면 실행
app.get("/", (req, res) => {
  //게시글 리스트를 json 형식으로 보여줌
  res.json(posts);
});

///post로  요청이 오면 실행
app.post("/posts", (req, res) => {
  const { title, name, text } = req.body;
  posts.push({ id: posts.length + 1, title, name, text, createdDt: Date() });
  res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const filteredPosts = posts.filter(post => post.id !== +id);
  const isLengthChanged = posts.length !== filteredPosts.length;
  posts = filteredPosts;

  //삭제되었는지 판단후 리턴 값
  if (isLengthChanged) {
    res.json("OK");
    return;
  }
  res.json("NOT CHANGED");
});

app.listen(3000, () => {
  console.log("welcome posts Start!");
});
