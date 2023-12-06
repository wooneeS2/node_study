/**
 *  프로미스는 이행, 대기, 거절 세 상태를 가짐
 *  프로미스는 객체이기 때문에 new 연산자로 인스턴스를 생성 할 수 있음
 *  promise 객체가 생성되면 대기 상태가 되고, resolve()함수가 실행되면 이행, reject()가 실행되면 거절로 변경됨
 *
 *
 */

const DB = [];

function saveDB(user) {
  const oldDbSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);

  //콜백 대신 promise 객체 반환
  return new Promise((resolve, reject) => {
    if (DB.length > oldDbSize) {
      //성공
      resolve(user);
    } else {
      //실패
      reject(new Error("Save DB error"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise(resolve => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch(error => new Error(error).finally(() => console.log("완료")));
  console.log(result);
  return result;
}

const myUser = { email: "bona@test.com", name: "bona", password: "123" };
// const result = registerByPromise(myUser);

// //결과값이 promise여서 then() 메서드에 함수를 넣어 결과값을 볼 수 있음.
// result.then(console.log);

//동시에 여러 프로미즈 객체 호출하기
allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
allResult.then(console.log);
