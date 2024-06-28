const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router');
const port = 3001;
const host = 'localhost';
const mongoose = require( 'mongoose' );

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://adhiuda98:udari1234@cluster0.vhwtg77.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to mongoDB');
    } catch (error) {
        console.log("MongoDb error: ", error);
    }
};

connect();

const server = app.listen(port, host,() => { //'127.0.0.1' or http://localhost
    console.log(`Node server is listeninng to ${server.address().port}`)
});

app.use('/api', router);
