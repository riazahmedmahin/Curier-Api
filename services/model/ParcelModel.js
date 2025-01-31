
import mongoose from 'mongoose';

const parcelSchema = new mongoose.Schema({
  sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  receiver_name: { type: String, required: true },
  receiver_phone: { type: String, required: true },
  receiver_address: { type: String, required: true },
  weight: { type: Number, required: true },
  dimensions: { type: String, required: true },
  parcel_type: { type: String, enum: ['Document', 'Package'], required: true },
  status: { type: String, enum: ['Pending', 'In Transit', 'Delivered'], default: 'Pending' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
},

  {
    //timestamps:true,
    versionKey:false
  }
);

const ParcelModel = mongoose.model('Parcels', parcelSchema);

export default  ParcelModel;