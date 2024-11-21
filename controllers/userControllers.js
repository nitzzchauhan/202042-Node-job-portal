import { User } from "../db/models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

class UserController {
  static register = async (req, res) => {
    try {
      const { fullname, email, phoneNumber, password, role } = req.body;
      if (!fullname || !email || !phoneNumber || !password || !role) {
        return res.status(400).json({
          success: false,
          message: "Something is missing",
        });
      }

      //profile photo cloudinary
      // if (req.file) {
      // }

      //Checking existence of user
      const user = await User.findOne({ email });
     

      if (user) {
        return res.status(400).json({
          success: false,
          message: "User Already Exist",
        });
      }

      //  generate a salt
      const salt = await bcrypt.genSalt(10);

   

      // password hashed
      const hashPassword = await bcrypt.hash(password, salt);

 

      await User.create({
        fullname,
        email,
        phoneNumber,
        password:hashPassword,
        role,
        profile: "aaa",
      });
      console.log("hello")

      return res
        .status(201)
        .json({ success: false, message: "Acoount created successfully" });
    } catch (err) {
      console.log(err.message);
    }
  };

  static login = async (req, res) => {
  try{
    const {email, password, role} = req.body
    if ( !email ||  !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Something is missing",
      });
    }

    //Checking existence of user
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password or email",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password )

    if (!isPasswordMatch){
      return res.status(400).json({
        success: false,
        message: "Incorrect password or email",
      });
    }

    if (role !== user.role){
      return res.status(400).json({
        success: false,
        message: "Account doesnt exist with current role",
      });
    }

    const tokenData = {userId :user._id}

    const token = await jwt.sign(tokenData,process.env.SECRET_KEY, {expiresIn: '1d'})
    return res.status(200).json({
      success:true,
      message:"logged in succesfully",
      token:token
    })




     




  }
  catch(err){
    console.log(err.message)
  }
  };
  static logout = async (req, res) => {
    res.send("hello from the logout");
  };
  static updateProfile = async (req, res) => {
    res.send("hello from the update");
  };
}

export default UserController;
