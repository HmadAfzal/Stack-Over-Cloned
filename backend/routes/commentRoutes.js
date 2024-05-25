import express from "express";
import {postComment} from "../controllers/commentController.js";
const commentRouter=new express.Router();


commentRouter.post('/api/comment/:id', postComment );

export default commentRouter ;