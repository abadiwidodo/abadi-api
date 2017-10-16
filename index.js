var Server = require('abadi-microservice');
var routes = require('./app/routes');

const server = new Server(routes);

server.start();