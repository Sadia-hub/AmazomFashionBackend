const Fashion = require("../models/reviewModel");

const getAllReviews = async (req, res) => {
  
  try {
    const allReviews = await Fashion.aggregate([
      {
        $group: {
          _id: "$asin",
          reviews: { $push: "$$ROOT" },
        },
      },
      {
        $project: {
          _id: 0,
          productID: "$_id",
          reviews: 1,
        },
      },
    ]);

    console.log(allReviews);
    res.status(200).json({ allReviews, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.msg, success: false });
  }
};

const addReview = async (req, res) => {
  
  try {
    const allReviews = await Fashion.create(req.body);
    res.status(200).json({ allReviews, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.msg, success: false });
  }
};

const updateReview = async (req, res) => {
  const { _id } = req.params;
  const updateData = req.body;

  try {
    // Find the product by ID and update it
    const updatedProduct = await Fashion.findByIdAndUpdate(
      _id,
      updateData,
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Review not found" });
    }

    res.json({ updatedProduct, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error", success: false });
  }
};

const deleteReview = async (req, res) => {
  const { _id } = req.params;

  try {
    const deletedReview = await Fashion.findByIdAndDelete(_id);

    if (!deletedReview) {
      return res.status(404).json({ msg: "Review not found" });
    }

    res.json({ msg: "Review deleted successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error", success: false });
  }
};

module.exports = {
  getAllReviews,
  addReview,
  updateReview,
  deleteReview,
};
