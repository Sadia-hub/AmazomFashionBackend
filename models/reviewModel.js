const mongoose = require('mongoose');

const FashionSchema = new mongoose.Schema({
    asin: { type: String },
    image: { type: Array },
    overall: { type: Number },
    reviewerID: { type: String },
    reviewerName: { type: String },
    reviewText: { type: String },
    reviewTime: { type: String },
    unixReviewTime: { type: Number },
    summary: { type: String },
    verified: { type: Boolean },
    unixReviewTime: { type: Number },
    vote: { type: String },
},{strict: false, collection : 'Fashion'});

module.exports = mongoose.model('Fashion', FashionSchema);
