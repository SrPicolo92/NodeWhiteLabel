const express = require("express");
const { ClientRegister } = require("../connectors/clientRegisterConnector");
const { SendToMicrosserviceAndGoConnector } = require("../connectors/sendToMicroserviceAndGoConnector");
const router = express.Router();


router.post("/", async(req,res) =>{    
    try{
        let payload = {
            name : req.body.name,
            cpf : req.body.cpf,
            phone : req.body.phone,
        }
        SendToMicrosserviceAndGoConnector(payload);
        payload = {
            message_type : "text",
            text: "Estamos verificando sua requisição, aguarde..."
        }
        res.send(payload);
        
    } catch(err)
    {
        throw err;
    }
    
})

module.exports = router;