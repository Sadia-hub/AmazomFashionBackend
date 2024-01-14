const express = require('express')
const reviewController = require("../controllers/reviewController")
const router = express.Router()

router.route("/reviews")
.get(reviewController.getAllReviews);

module.exports = router;