const MongoClient = require('mongodb').MongoClient;

const url =
    'mongodb+srv://****:****@cluster0.xuppdu5.mongodb.net/test?retryWrites=true&w=majority';

//MongoClient 생성
const client = new MongoClient(url);

async function main() {
    try {
        //커넥션 생성하고 연결 시도
        await client.connect();
        console.log('MongoDB 접속 성공');
        //test데이터베이스의 person 컬렉션 가져오기
        const collection = client.db('test').collection('person');

        await collection.insertOne({ name: 'bona', age: 20 });
        console.log('문서 추가 완료');

        //결과값이 여러개일수 있어서 배열로 반환
        const documents = await collection.find({ name: 'bona' }).toArray();
        console.log('찾은 문서 : ', documents);

        await collection.updateOne({ name: 'bona' }, { $set: { age: 21 } });
        console.log('update document');

        const updatedDocuments = await collection
            .find({ name: 'bona' })
            .toArray();
        console.log('updated documents : ', updatedDocuments);

        // await collection.deletedOne({name:'bona'})
        // console.log('deleted documents');

        await client.close();
    } catch (e) {
        console.log(e);
    }
}

main();
