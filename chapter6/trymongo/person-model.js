var mongoose = require('mongoose');
var Schema = mogoose.Schema;

const personSchema = new Schema({
    name: String,
    age: Number,
    email: { type: String, required: true },
});

module.exports = mongoose.model('Person', personSchema);

//몽구스 => 객체를 도큐먼트로 매핑하는 ODM
//필드 타입 지정 및 유효성 검증 등등 가능
