import UserModel from '../model/UserModel.js';
import { TokenEncode } from "../utility/tokenutility.js";
import jwt from 'jsonwebtoken';

// Create a new user (Sign Up)
export const CreateUser = async (req, res) => {
  try {
    const reqbody = req.body;

    // Check if email already exists
    const existingUser = await UserModel.findOne({ email:reqbody.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user
    const newUser = new UserModel(reqbody);

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {

    let reqbody = req.body;
    let data = await UserModel.findOne(reqbody)
    if(data==null){
      return res.json({status:"success",data: "user not found"})
    }
    else{
      let token = await TokenEncode(data['email'],data['_id'])
      res.status(200).json({ message: 'Login successful', token:token });
    }

   
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ReaduserProfile details by ID
export const ReadProfile = async (req, res) => {
  try{
    let user_id = req.headers['user_id']
    let data =await UserModel.findOne({"id":user_id})
    return res.json({ status: "success", message: "User Profile details Sucessfull",data:data });
}
catch(e){
    return res.json({ status: "fail", message: e.toString() });
}
};