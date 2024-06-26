const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
    Log(msg){
        // call event
        this.emit('message', {id:uuid.v4(), msg})
    }
}

module.exports = Logger
