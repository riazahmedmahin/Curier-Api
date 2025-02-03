import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  delivery_agent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  delivery_status: { type: String, enum: ['Assigned', 'Picked Up', 'Delivered'], default: 'Assigned' },
  delivery_start_time: { type: Date },
  delivery_end_time: { type: Date },
});

const DeliveryModel = mongoose.model('Deliverys', deliverySchema);
export default  DeliveryModel;