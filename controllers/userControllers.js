import { user } from "../db/models/userModel.js";


class UserController {
  static register = async (req, res) => {
   try{
     console.log(req.body) 
   }
   catch(err){
    console.log(err.message)
   }
  };

  static login = async (req, res) => {
    res.send("hello from the login");
  };
  static logout = async (req, res) => {
    res.send("hello from the logout");
  };
  static updateProfile = async (req, res) => {
    res.send("hello from the update");
  };
}

export default UserController;
