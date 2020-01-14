//here we can write normal JS code

// FIRST EXAMPLE

// we will say const instead of var because then we are saving the value inside a constant and we will not overwrite the value of 'logger' in this case 
//const logger = require('./logger.js');

//logger.log('message');

// if we will have this in the logger.js --> module.exports = log; we will need to call it like this --> logger('message');

// SECOND EXAMPLE

// const path = require('path');

// var pathObj =  path.parse(__filename);

// console.log(pathObj);

// // THIRD EXAMPLE -- EVENTS

// const EventEmitter = require('events'); //The first letter in the const is a capital letter and that indicates that it is a Class


// //We are going to create the logger below

// const Logger = require('./logger');
// const logger = new Logger();

// //Register a listener 
// logger.on('messageLogged', (arg) => { //on is the same as addListener. This event again takes two arguments, the name of the event and the callback function
//     console.log('Listener called', arg);

// }); 

// logger.log('message');

//Raise an event and add an event argument --> in the logger.js file

    //emitter.emit('messageLogged') 

    //emit means: produce something, then inside the brackets we will write the name of the event

    //The order here is important, we have to first register the event and then call it

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
     }

}); //server here is an object


server.listen(3000);

console.log('Listening on port 3000');



