import express from "express";
import { CreateUser, loginUser, ReadProfile } from '../services/controllers/UserController.js';
import {CreateParcel,ListByParcel,ParcelDetailsById,UpdateParcel,DeleteParcel,} from '../services/controllers/ParcelController.js';
import {CreateOrders,ListByOrder,OrderDetailsById,UpdateOrder,DeleteOrder,} from '../services/controllers/OrderController.js';
import {createDelivery,getAllDeliveries,getDeliveryById,updateDelivery,deleteDelivery,} from '../services/controllers/DeliveryController.js';
import { ProductCategoryList } from "../services/controllers/CategoryController.js";
import {createCategory} from "../services/controllers/CategoryController.js"
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

// Delivery routes
router.post('/createDelivery', createDelivery); // Create a new delivery
router.get('/getAllDeliveries', getAllDeliveries); // Get all deliveries
router.get('/getDeliveryById/:id', getDeliveryById); // Get a single delivery by ID
router.put('/updateDelivery/:id', updateDelivery); // Update a delivery by ID
router.delete('/deleteDelivery/:id', deleteDelivery); // Delete a delivery by ID

// CategoryList
router.post("/CtreateCategory", createCategory);
router.get("/CategoryList",ProductCategoryList);


export default router;