import express from "express";
import { CreateUser, loginUser, ReadProfile } from '../services/controllers/UserController.js';
import {CreateParcel,ListByParcel,ParcelDetailsById,UpdateParcel,DeleteParcel,} from '../services/controllers/ParcelController.js';
import {
  CreateOrders,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from '../services/controllers/OrderController.js';

import auth from "../services/middleware/auth.js";

const router = express.Router();


// USER
router.post('/signup', CreateUser);
router.post('/login',loginUser); // Changed from GET to POST
router.get('/user/:id',ReadProfile);

// Parcel routes
router.post('/CreateParcel', CreateParcel);
router.get('/ListByParcel', ListByParcel);
router.get('/ParcelDetailsById/:id', ParcelDetailsById);
router.put('/UpdateParcel/:id', UpdateParcel);
router.delete('/DeleteParcelById/:id', DeleteParcel);

// Order routes
router.post('/CreateOrders', CreateOrders);
router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrderById);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;