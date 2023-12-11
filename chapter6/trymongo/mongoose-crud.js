const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Person = require('./person-model');

mongoose.set('strictQuery', false);

const app = express();
app.use(bodyParser.json());
app.listen(3000, async () => {
    console.log('Server started');
    const mongodbUri =
        'mongodb+srv://****:****@cluster0.xuppdu5.mongodb.net/test?retryWrites=true&w=majority';
    mongoose.connect(mongodbUri).then(console.log('connected to mongoDB'));
});

app.get('/person', async (req, res) => {
    const person = await Person.find({});
    res.end(person);
});

app.get('/person/:email', async (req, res) => {
    const person = await Person.findOne({ email: req.params.email });
    res.end(person);
});

app.post('/person/:email', async (req, res) => {
    const person = new Person(req.body);
    await person.save();
    res.end(person);
});

app.put('/person/:email', async (req, res) => {
    const person = await Person.findOneAndUpdate(
        { email: req.params.email },
        { $set: req.body },
        { new: true }
    );
    console.log(person);
    res.send(person);
});

app.delete('/person/:email', async (req, res) => {
    await Person.deleteMany({ email: req.params.email });
    res.send({ success: true });
});
