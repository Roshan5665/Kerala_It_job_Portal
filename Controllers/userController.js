const { decrypt } = require("dotenv");
const encrypt = require("../MiddleWare/encrypt");
const user = require("../Schemas/userSchema");
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')
exports.userLogin=async(request,response)=>{
    const {userEmail,userPassword} = request.body;
    try {
        //finding is Existing User
         const existingUser = await user.findOne({ userEmail:userEmail})

        if(existingUser){
           const isValidUser = await bcrypt.compare(userPassword,existingUser.userPassword)
          if(isValidUser){
            const token = jwt.sign(existingUser.userEmail,process.env.JWT_SECRET_KEY)
            response.status(200).json({message:'Logged in Successfully',token:token})
          } else{
            response.status(401).json({message:'Invalid Credentials'})
          }   
        }else{
            // -------------------------------------------------------------Need a nav link to register 
            response.status(401).json({message:"Existing User please Login"})
        }
        
    } catch (error) {
        console.log(error);
        
        response.status(500).json({message:'server error',error})
    }
}

exports.userRegister = [encrypt,async(request,response)=>{
    const {userEmail,userPassword} = request.body;
    try {
        if(userEmail && userPassword){  
            console.log(userPassword);
            let isExistingUser = await user.findOne({userEmail})
         
            if(!isExistingUser){
              const newUser = new user({
                userEmail:userEmail,
                userPassword:userPassword
              })
              await newUser.save();
              response.status(200).json({message:'Registerd Successfully',data:newUser})
            }else{
                response.status(401).json({message:'Existing User please Login'})
            }
        }else{
            response.status(400).json({message:'Incompleted form data'})
        }
        
        
    } catch (error) {
        response.status(500).json({message:'Internal Error',error:error})
    }
   
}]