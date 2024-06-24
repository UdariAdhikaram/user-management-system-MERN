const app = require('./app');
const port = 3001;
const host = '127.0.0.1';

const server = app.listen(port, host,() => { //'127.0.0.1' or http://localhost
    console.log(`Node server is listeninng to ${server.address().port}`)
});