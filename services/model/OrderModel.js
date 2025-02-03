import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  parcel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Parcels', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  pickup_date: { type: Date, required: true },
  delivery_date: { type: Date },
  total_cost: { type: Number, required: true },
  payment_status: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model('Orders', orderSchema);

export default OrderModel; 