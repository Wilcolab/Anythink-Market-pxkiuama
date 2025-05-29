const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
// Hey GitHub Copilot, please complete the code for the comments API routes
const { auth } = require("../../middleware/auth");
const { validateComment } = require("../../middleware/validation");

 /**
     * Creates a new Comment instance using the data provided in the request body.
     * @type {Comment}
     * @param {Object} req.body - The request body containing comment data.
     */
router.post("/", auth, validateComment, async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
     * Retrieves all comments from the database and populates the 'user' field with the user's username.
     * @type {Promise<Array<Object>>}
     * @returns {Promise<Array<{ user: { username: string }, ... }>>} A promise that resolves to an array of comment objects with populated user usernames.
     */
router.get("/", auth, async (req, res) => {
  try {
    const comments = await Comment.find().populate("user", "username");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
);

// add another endpoint for deleting a comment
/**
     * Deletes a comment by its ID.
     * 
     * @param {Object} req - Express request object.
     * @param {string} req.params.id - The ID of the comment to delete.
     * @returns {Promise<Object|null>} The deleted comment document, or null if not found.
     */
router.delete("/:id", auth, async (req, res) => {
  try {
    
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
