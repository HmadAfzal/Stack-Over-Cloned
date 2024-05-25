import Answer from "../models/Answer.js";
import Question from "../models/Question.js";

export const giveAnswer = async (req, res) => {
  try {
    const { answer, user } = req.body;
    const { id } = req.params;
    if (!answer) {
      return res.status(400).json({ message: "Required field is missing" });
    }
    if (!user) {
      return res.status(400).json({ message: "Unauthorized" });
    }
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    const newAnswer = new Answer({
      user,
      answer,
    });
    await newAnswer.save();
    question.answers.push(newAnswer);
    await question.save();
    res.status(200).json({ message: "Answer posted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error in posting answer" });
    console.error(error);
  }
};