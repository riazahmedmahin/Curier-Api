import express from "express";
import { CreateUser, loginUser, ReadProfile } from '../services/controllers/UserController.js';
import {
    createParcel,
    getAllParcels,
    getParcelById,
    updateParcel,
    deleteParcel,
  } from '../services/controllers/ParcelController.js';
import auth from "../services/middleware/auth.js";
const router = express.Router();
import * as UserControllers from "../services/controllers/UserController.js";
// USER
router.post('/signup', CreateUser);
router.post('/login',loginUser); // Changed from GET to POST
router.get('/user/:id',ReadProfile);

// Parcel routes
router.post('/CreateParcels', createParcel);
router.get('/parcels', getAllParcels);
router.get('/ParceDeatilslByID/:id', getParcelById);
router.put('/parcels/:id', updateParcel);
router.delete('/parcels/:id', deleteParcel);

export default router;