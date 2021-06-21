//create dirst express application

//2 lines - require express module and creates new express application obejct
var express = require('express');
var app = express();

//appp.use mounts middleware function with specific path
//app.use reponds to HTTP request made tot eh root path
app.use('/', function(req, res) {
    //res.send used to send teh response back
    //express wrapper that sets content tupe header according to response object type
    //then sends response bck useing Connect res.end method
    res.send('Hello World');
});

//app.liste, tells exp app to listen to port 3000
app.listen(3000);
console.log('Server running at http://localhost:3000/');
//used to retun the application object, helpsload and test express application
module.exports = app;


//run applicatio by running node server in command prompt