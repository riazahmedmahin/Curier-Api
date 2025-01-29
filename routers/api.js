import express from "express";
import { CreateUser, loginUser, ReadProfile } from '../services/controllers/UserController.js';

const router = express.Router();

// USER
router.post('/signup', CreateUser);
router.post('/login', loginUser); // Changed from GET to POST
router.get('/user/:id', ReadProfile);

export default router;