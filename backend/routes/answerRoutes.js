import express from "express";
import {giveAnswer} from "../controllers/answerController.js";
const answerRouter=new express.Router();


answerRouter.post('/api/answer/:id', giveAnswer );

export default answerRouter ;