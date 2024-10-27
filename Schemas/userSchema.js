const mongoose = require('mongoose');
const userModel =new mongoose.Schema({
    userEmail:{
        type:String,
        require:true
    },
    userPassword:{
        type:String,
        require:true
    }
})
const user = mongoose.model('users',userModel);
module.exports = user