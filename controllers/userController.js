const User = require("../models/userModel")
const signup = async (req, res) =>{
    try{
        const user = await User.create(req.body)
        res.status(200).json({user, success:true})
    }
    catch(err){
        res.status(500).json({err:err.message, success:false})
    }
}

const login = async (req, res) =>{
    try{
        const { email, password } = req.body
        const user = await User.findOne({
            $and: [
                { email: email },
                { password: password  }
              ]
        });

        if(user){
            return res.status(200).json({user, success:true})
        }
        res.status(404).json({success:false, msg:"User does not exist"})
        
        
    }
    catch(err){
        res.status(500).json({err:err.message, success:false})
    }
}


module.exports = {
    signup,
    login
}
