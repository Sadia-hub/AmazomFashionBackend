const Fashion  = require('../models/reviewModel');

const getAllReviews = async (req, res) => { // get all users
    try{
        const allReviews = await Fashion.aggregate([
            {
                $group: {
                    _id: '$asin',
                    reviews: { $push: '$$ROOT' }
                }
            },
            {
                $project: {
                    _id: 0,
                    productID: '$_id',
                    reviews: 1
                }
            }
        ]);
        
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