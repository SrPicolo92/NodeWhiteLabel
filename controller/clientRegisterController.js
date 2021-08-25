const express = require("express");
const { ClientRegister } = require("../connectors/clientRegisterConnector");
const router = express.Router();


router.post("/", async(req,res) =>{    
    try{
        let payload = {
                name : req.body.name,
                cpf : req.body.cpf,
                phone : req.body.phone,
            }

        const response = await ClientRegister(payload);
        const options = {
            id : response.data.id,
            json: true,
        };
        res.send(options);
    } catch(err)
    {
        throw err;
    }
    
})

module.exports = router;