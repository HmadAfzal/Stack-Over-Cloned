import mongoose, { Schema } from "mongoose";
import Comment from './Comment.js';
import Answer from './Answer.js'
const schema = mongoose.Schema;

const questionSchema = new schema({
    user:{
        type:Object
    },
    question: {
        type :String,
        required: true
    },
    questionBody: {
        type :String,
        required: true
    },
    tags: {
        type :Array,
    },
    comments: [{
        type :Schema.Types.ObjectId,
      ref: Comment
    }],
    answers: [{
        type :Schema.Types.ObjectId,
      ref: Answer
    }],
}, {timestamps: true})


const Question= new mongoose.model('Question', questionSchema);

export default Question;