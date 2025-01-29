import express from "express";
import { CreateUser, loginUser, ReadProfile } from '../services/controllers/UserController.js';
import auth from "../services/middleware/auth.js";
const router = express.Router();
import * as UserControllers from "../services/controllers/UserController.js";
// USER
router.post('/signup', CreateUser);
router.post('/login',loginUser); // Changed from GET to POST
router.get('/user/:id',ReadProfile);

export default router;