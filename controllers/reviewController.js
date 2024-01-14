const Fashion  = require('../models/reviewModel');

const getAllReviews = async (req, res) => { // get all users
    try{
        
        const allReviews = await Fashion.find();
         console.log(allReviews)
        res.status(200).json({allReviews, success:true})
        
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:err.message, success:false})
    }
}   

module.exports = {
    getAllReviews
}