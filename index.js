require("dotenv").config();
 require('./Connections/database_connection');
const express = require("express");
const cors = require("cors");
const router = require('./Routes/route')
const app = express();
app.use(cors());
app.use(express.json());    //parsing ...json => obj
app.use(router); 


const port = 3000;
app.listen(port,()=>{
    console.log(`server running at ${port}`);
})
