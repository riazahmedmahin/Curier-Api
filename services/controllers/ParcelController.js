import ParcelModel from '../model/ParcelModel.js';
import UserModel from '../model/UserModel.js';


// Create a new parcel
export const CreateParcel = async (req, res) => {
  try {
    const reqBody = req.body;

    // Check if the sender_id (user) exists
    const senderExists = await UserModel.findById(reqBody.sender_id);
    if (!senderExists) {
      return res.status(404).json({ message: 'Sender not found' });
    }

    // Create a new parcel
    const newParcel = new ParcelModel(reqBody);

    // Save the parcel to the database
    await newParcel.save();

    res.status(201).json({ message: 'Parcel created successfully', parcel: newParcel });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all parcels
export const ListByParcel = async (req, res) => {
  try {
    const parcels = await ParcelModel.find().populate('sender_id', 'name email'); // Populate sender details
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single parcel by ID
export const ParcelDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const parcel = await ParcelModel.findById(id).populate('sender_id', 'name email '); // Populate sender details

    if (!parcel) {
      return res.status(404).json({ message: 'Parcel not found' });
    }

    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a parcel by ID
export const UpdateParcel = async (req, res) => {
  try {
    const { id } = req.params;
    const reqBody = req.body;

    const updatedParcel = await ParcelModel.findByIdAndUpdate(
      id,
      reqBody,
      { new: true } // Return the updated document
    ).populate('sender_id', 'name email'); // Populate sender details

    if (!updatedParcel) {
      return res.status(404).json({ message: 'Parcel not found' });
    }

    res.status(200).json({ message: 'Parcel updated successfully', parcel: updatedParcel });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a parcel by ID
export const DeleteParcel = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedParcel = await ParcelModel.findByIdAndDelete(id);

    if (!deletedParcel) {
      return res.status(404).json({ message: 'Parcel not found' });
    }

    res.status(200).json({ message: 'Parcel deleted successfully',});
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};