const express = require('express');
const cors = require('cors');
const app = express();

const port = 3001;
const host = '127.0.0.1';
const mongoose = required( 'mongoose' );

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://udariadhikaram:udari123@cluster0.jcyt83a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to mongoDB');
    } catch (error) {
        console.log("MongoDb erroe: ", error);
    }
};

connect();

const server = app.listen(port, host,() => { //'127.0.0.1' or http://localhost
    console.log(`Node server is listeninng to ${server.address().port}`)
});