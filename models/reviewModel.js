const mongoose = require('mongoose');

const FashionSchema = new mongoose.Schema({
    asin: { type: String },
    overall: { type: Number },
    reviewerID: { type: String },
    reviewerName: { type: String },
    reviewText: { type: String },
    unixReviewTime: { type: Number },
},{strict: false, collection : 'Fashion'});

module.exports = mongoose.model('Fashion', FashionSchema);
