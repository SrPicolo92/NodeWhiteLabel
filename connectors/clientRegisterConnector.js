const axios = require('axios')

// Connection to the backend Spring Framework microservice: whitelabel (for more information check ClientController at the Java Whitelabel project)
const ClientRegister = async function(payload, timeout = 1000*60){
    try{
        const HEADERS = {
            'Content-type': 'application/json',
        }
        //send all the payload data as JSON to the micro service
        let options = {
            method: 'post',
            url: process.env.CLIENT_REGISTER_MICROSERVICE_URL,
            timeout,
            headers: HEADERS,
            data: {
                ...payload
            },
        }

        const response = await axios(options);
        
        return response;
    }catch(error){
        throw error;
    }
}

module.exports = {
    ClientRegister,
}