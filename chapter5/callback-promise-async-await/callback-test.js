const DB = [];

//회원가입 API 함수
//콜백이 3중으로 중첩된 함수
function register(user) {
  return saveDB(user, function (user) {
    return sendEmail(user, function (user) {
      return getResult(user);
    });
  });
}

//DB에 저장 후 콜백 실행
function saveDB(user, callback) {
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}

//이메일 발송 로그만 남기는 코드 실행 후 콜백 실행
function sendEmail(user, callback) {
  console.log(`email to ${user.email}`);
  return callback(user);
}

//결과를 반환하는 함수
function getResult(user) {
  return `success register ${user.name}`;
}

const result = register({
  email: "bona@test.com",
  password: "1234",
  name: "bona",
});
console.log(result);

//콜백은 코드가 복잡하고 에러가 발생하면 에러를 추적하기 어려운 단점이 있음.
