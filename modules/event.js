const EventEmitter = require('events')

// create class

class myEmitter extends EventEmitter {}

// init object

const myemitter = new myEmitter();

// event listener

myemitter.on('event', () => console.log('Event Works...'))

// init event
myemitter.emit('event');
myemitter.emit('event');