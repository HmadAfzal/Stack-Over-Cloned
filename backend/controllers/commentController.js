import Comment from "../models/Comment.js";
import Question from "../models/Question.js";

export const postComment = async (req, res) => {
  try {
    const { comment, user } = req.body;
    const { id } = req.params;
    if (!comment) {
      return res.status(400).json({ message: "Required field is missing" });
    }
    if (!user) {
      return res.status(400).json({ message: "Unauthorized" });
    }
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    const newComment = new Comment({
      user,
      comment,
    });
    await newComment.save();
    question.comments.push(newComment);
    await question.save();
    res.status(200).json({ message: "comment posted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error in posting comment" });
    console.error(error);
  }
};