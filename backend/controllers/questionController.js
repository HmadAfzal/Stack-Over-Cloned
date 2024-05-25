import Question from "../models/Question.js";

export const askQuestion = async (req, res) => {
  try {
    let { user, question, questionBody, tags,  } = req.body;
    if (!question || !questionBody || !tags) {
      return res.status(400).json({ massage: "required field is missing" });
    }
    if (!user) {
      return res.status(400).json({ massage: "unauthrized" });
    }

    let newQuestion = new Question({
      user,
      question,
      questionBody,
      tags,
      
    });

    await newQuestion.save();
    res.status(200).json({ message: "question posted successfully" });
  } catch (error) {
    res.status(500).json({ message: "error in posting question" });
    console.log(error);
  }
};


export const getAllQuestions=async(req,res)=>{
try {
      let allQuestions= await Question.find({}).populate('answers').populate('comments');
      if(Question.length==0){
       return  res.status(404).json({message:"No Questions posted yet"})
      }
    else {res.status(200).json(allQuestions)}
} catch (error) {
    res.status(500).json({ message: "error in fetching questions" });
    console.log(error);
}

}


export const getSingleQuestion=async(req,res)=>{
try {
        let {id}= req.params;
        let question=await Question.findById(id);
        if(!question){
            return  res.status(404).json({message:"Question not found"})
           }
           else {
            res.status(200).json(question)
           }
} catch (error) {
    res.status(500).json({ message: "error in finding question" });
    console.log(error); 
}
}


