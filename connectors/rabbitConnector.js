const amqplib = require("amqplib")
const logger = require('../utils/logger')

function connect(){
    return amqplib.connect(  
        {
          protocol: process.env.RABBIT_PROTOCOL,
          hostname: process.env.RABBIT_HOSTNAME,
          port: process.env.RABBIT_PORT,
          username: process.env.RABBIT_USERNAME,
          password: process.env.RABBIT_PASSWORD
        }
    ).then(conn => conn.createChannel());
}

function sendToQueue(queue, message){
    connect()
      //.then(channel => createQueue(channel, queue))
      .then(channel => channel.sendToQueue(queue, Buffer.from(JSON.stringify(message))))
      .catch(err => logger.error({ msg: "Erro para gravar na fila Rabbit", mensagemError: err.message }, payload))
}

function consume(queue, callback){
  connect()
    //.then(channel => createQueue(channel, queue))
    .then(channel => channel.consume(queue, callback, { noAck: true }))
    .catch(err => logger.error({ msg: "Erro para consumir na fila Rabbit", mensagemError: err.message }, payload));
}

module.exports = {
    sendToQueue,
    consume
}