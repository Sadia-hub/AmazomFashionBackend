const User = require("../models/userModel")
const jwt = require("jsonwebtoken");

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
            const token = jwt.sign({username:email},process.env.SECRET_KEY,{expiresIn:60*30})
            return res.status(200).json({user, token, success:true})
        }
        res.status(404).json({success:false, msg:"Either email or password is wrong"})
        
        
    }
    catch(err){
        res.status(500).json({err:err.message, success:false})
    }
}


module.exports = {
    signup,
    login
}
