import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();


mongoose.connect(
    process.env.MONGODB_URI
  ).then(() => {
      console.log("MongoDB is Connected"); 
  }).catch(err => {
      console.log(err);
  });
  

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use('/api/user',userRoutes);
app.use('/api/auth',authRouter);


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message =err.message ||"Internal server error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})