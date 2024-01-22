import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorhandled } from "../utils/error.js";



export const signup = async(req,res,next)=>{
    const {username,email,password} = req.body;

    if(!username || !password || !email || username === '' || email === '' ||password === '')
    {
        next(errorhandled(400,'All Field are required'));
    }


    const hashedPassword = bcryptjs.hashSync(password,10)

    const newUser = new User({
        username,
        email,
        password:hashedPassword
    });
 
    try {
        await newUser.save();
        res.json("Sign UP Successfull")
        
    } catch (error) {
        next(error);
    }

}

