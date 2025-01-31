import OrderModel from '../model/OrderModel.js'; // Correct import path
import ParcelModel from '../model/ParcelModel.js'; // Correct import path
import UserModel from '../model/UserModel.js'; // Correct import path

// Create a new order
export const CreateOrders = async (req, res) => {
  try {
    const { parcel_id, user_id, pickup_date, delivery_date, total_cost } = req.body;

    // Check if the parcel exists
    const parcelExists = await ParcelModel.findById(parcel_id);
    if (!parcelExists) {
      return res.status(404).json({ message: 'Parcel not found' });
    }

    // Check if the user exists
    const userExists = await UserModel.findById(user_id);
    if (!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a new order
    const newOrder = new OrderModel({
      parcel_id,
      user_id,
      pickup_date,
      delivery_date,
      total_cost,
    });

    // Save the order to the database
    await newOrder.save();

    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find()
      .populate('parcel_id', 'receiver_name receiver_phone status') // Populate parcel details
      .populate('user_id', 'name email'); // Populate user details

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single order by ID
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await OrderModel.findById(id)
      .populate('parcel_id', 'receiver_name receiver_phone status') // Populate parcel details
      .populate('user_id', 'name email'); // Populate user details

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update an order by ID
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { pickup_date, delivery_date, total_cost, payment_status } = req.body;

    const updatedOrder = await OrderModel.findByIdAndUpdate(
      id,
      { pickup_date, delivery_date, total_cost, payment_status },
      { new: true } // Return the updated document
    )
      .populate('parcel_id', 'receiver_name receiver_phone status') // Populate parcel details
      .populate('user_id', 'name email'); // Populate user details

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete an order by ID
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await OrderModel.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully', order: deletedOrder });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};