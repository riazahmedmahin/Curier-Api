
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true ,lowercase:true,required:true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String, required: true },
  address: { type: String, required: true },
  user_type: { type: String, enum: ['Customer', 'Admin', 'Rider'], required: true },

},

{
  timestamps:true,
  versionKey:false
}


);

const UserModel = mongoose.model('Users', userSchema);

export default UserModel;
