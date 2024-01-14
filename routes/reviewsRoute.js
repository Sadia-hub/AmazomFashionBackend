const express = require('express')
const reviewController = require("../controllers/reviewController")
const router = express.Router()

router.route("/reviews")
.get(reviewController.getAllReviews)
.post(reviewController.addReview)

router.route("/reviews/:_id")
.put(reviewController.updateReview)
.delete(reviewController.deleteReview);

module.exports = router;