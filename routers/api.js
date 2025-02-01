import express from "express";
import { CreateUser, loginUser, ReadProfile } from '../services/controllers/UserController.js';
import {CreateParcel,ListByParcel,ParcelDetailsById,UpdateParcel,DeleteParcel,} from '../services/controllers/ParcelController.js';
import {CreateOrders,ListByOrder,OrderDetailsById,UpdateOrder,DeleteOrder,} from '../services/controllers/OrderController.js';

import auth from "../services/middleware/auth.js";


const router = express.Router();


// USER
router.post('/signup', CreateUser);
router.post('/login',loginUser); 
router.get('/user/:id',ReadProfile);

// Parcel routes
router.post('/CreateParcel', CreateParcel);
router.get('/ListByParcel', ListByParcel);
router.get('/ParcelDetailsById/:id', ParcelDetailsById);
router.put('/UpdateParcel/:id', UpdateParcel);
router.delete('/DeleteParcelById/:id', DeleteParcel);

// Order routes
router.post('/CreateOrders', CreateOrders);
router.get('/ListByOrder', ListByOrder);
router.get('/OrderDetailsById/:id', OrderDetailsById);
router.put('/UpdateOrder/:id', UpdateOrder);
router.delete('/DeleteOrder/:id', DeleteOrder);

export default router;