import mongoose, { Schema } from "mongoose";
const schema = mongoose.Schema;

const commentSchema = new schema({
    user:{
        type:Object
    },
    comment: {
        type :String,
        required: true
    }
}, {timestamps: true})


const Comment= new mongoose.model('Comment', commentSchema);

export default Comment;