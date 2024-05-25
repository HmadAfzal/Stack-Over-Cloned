import mongoose, { Schema } from "mongoose";
const schema = mongoose.Schema;

const answerSchema = new schema({
    user:{
        type:Object
    },
    answer: {
        type :String,
        required: true
    }
}, {timestamps: true})


const Answer= new mongoose.model('Answer', answerSchema);

export default Answer;