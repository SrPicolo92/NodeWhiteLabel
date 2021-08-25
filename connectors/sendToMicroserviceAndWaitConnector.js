const axios = require('axios')

// Connection to the BackEnd Microsservices

const SendToMicrosserviceAndWaitConnector = async function(payload, timeout = 1000*8){
    try{
        const HEADERS = {
            'Content-type': 'application/json',
        }
        let options = {
            method: 'post',
            url: payload.microServiceUrl,
            timeout,
            headers: HEADERS,
            data: {
                ...payload
            },
        }


        //send all the payload data as JSON to the micro service
        //Wait for response from the microsservice and return it
        const response = await axios(options)
        return response;
    }catch(error){
        throw error;
    }
}

module.exports = {
    SendToMicrosserviceAndWaitConnector,
}