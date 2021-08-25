const {sendToQueue} = require('./rabbitConnector')

// Send the Message to a Queue

async function SendToMicrosserviceAndGoConnector(payload, timeout = 60000*4){
    try{
        const HEADERS = {
            'Content-type': 'application/json',
        }
        //send all the payload data as JSON to the micro service
        //Wait for response from the microsservice and return it
        //TO DO: Assert Queue Name!
        let options = {
            method: 'post',
            url: payload.microServiceUrl,
            timeout,
            headers: HEADERS,
            data: {
                ...payload
            },
        }

        sendToQueue(process.env.RABBIT_QUEUE_SEND_MESSAGE_TO_MICROSSERVICE, options)
        
    }catch(error){
        throw error;
    }
}

module.exports = {
    SendToMicrosserviceAndGoConnector,
}