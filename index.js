//1. Import dependencies
const express = require("express");
const app = express();
require("dotenv").config();

//1.1. Allow Parsing on request bodies
app.use(express.json());

//2. Importing routes to API
//const assistantRoutes = require("./controller/assistantController");
const clientRegisterRoutes = require("./controller/clientRegisterController");

//2.1 Direct requests to Routers
//app.use("/assistant", assistantRoutes);
app.use("/client", clientRegisterRoutes);

//3. STARTING SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server listening on port,", port);
})
