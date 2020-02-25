//Define Dependencies
require('dotenv').config();
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3500;

//Create a server
const server = http.createServer(app);

//Listen a port
server.listen(port, () => {
    console.log('Server running on ' + port);
});
