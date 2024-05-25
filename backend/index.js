import express from 'express'
const app = express();
import 'dotenv/config'
import cors from 'cors'
import mongoose from 'mongoose';
import questionRouter from './routes/questionRoute.js'
import answerRouter from './routes/answerRoutes.js';
import commentRouter from './routes/commentRoutes.js';
const port = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/stack-over-cloned').then(()=>{
  console.log('connected to db')  
}).catch(()=>{
    console.log('error connecting to db');
})

app.use(questionRouter)
app.use(answerRouter)
app.use(commentRouter)





app.listen(port, () => {
    console.log(`App is listening at port:${port}`);
});

app.get('/', (req, res) => {
    res.send('App is working well');
});