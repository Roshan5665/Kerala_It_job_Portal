const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_CONNECTION_STRING 
mongoose.connect(connectionString).then(()=>{
    console.log("Database connected");
    
}).catch((error)=>{
    console.log(`database connection error \n  ${error}`);
    
})