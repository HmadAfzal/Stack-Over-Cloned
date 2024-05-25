import express from "express";
import {askQuestion, getAllQuestions, getSingleQuestion} from "../controllers/questionController.js";
const questionRouter=new express.Router();


questionRouter.get('/api/questions', getAllQuestions );
questionRouter.get('/api/question/:id', getSingleQuestion );
questionRouter.post('/api/question/ask', askQuestion );

export default questionRouter;