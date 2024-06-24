const express = require('express');
const app = express();
const cors = express('cors');

//midlware(to change req,res events or lifecycle)

app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json()); 

module.exports = app;