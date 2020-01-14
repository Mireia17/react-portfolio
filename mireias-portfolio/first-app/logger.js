
// THIRD EXAMPLE -- EVENTS

// const EventEmitter = require('events'); 
// // we are creating a module for log in messages

// var url = 'http://mylogger.io/log'

// class Logger extends EventEmitter {

//     log(message){

//         // we will send an HTTP request 
//         console.log('message');
    
//         //Raise an event
    
//         this.emit('messageLogged', {id: 1, url:'http://' });
//     }
    

// }

// // we will do the following to make this function log that is now private public

// module.exports = Logger;

// // Instead of a whole object we can also export a single function saying --> module.exports = log;

// we only export the functions that other modules need to know about

