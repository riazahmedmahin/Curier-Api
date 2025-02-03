import DeliveryModel from '../model/DeliveryModel.js'; // Import the Delivery model
import OrderModel from '../model/OrderModel.js'; // Import the Order model
import UserModel from '../model/UserModel.js'; // Import the User model

// Create a new delivery
export const createDelivery = async (req, res) => {
  try {
    const { order_id, delivery_agent_id, delivery_start_time } = req.body;

    // Check if the order exists
    const orderExists = await OrderModel.findById(order_id);
    if (!orderExists) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Check if the delivery agent exists
    const deliveryAgentExists = await UserModel.findById(delivery_agent_id);
    if (!deliveryAgentExists || deliveryAgentExists.user_type !== 'Rider') {
      return res.status(404).json({ message: 'Delivery agent not found or invalid' });
    }

    // Create a new delivery
    const newDelivery = new DeliveryModel({
      order_id,
      delivery_agent_id,
      delivery_start_time,
    });

    // Save the delivery to the database
    await newDelivery.save();

    res.status(201).json({ message: 'Delivery created successfully', delivery: newDelivery });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all deliveries
export const getAllDeliveries = async (req, res) => {
  try {
    const deliveries = await DeliveryModel.find()
      .populate('order_id', 'pickup_date delivery_date total_cost') // Populate order details
      .populate('delivery_agent_id', 'name email phone_number'); // Populate delivery agent details

    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single delivery by ID
export const getDeliveryById = async (req, res) => {
  try {
    const { id } = req.params;
    const delivery = await DeliveryModel.findById(id)
      .populate('order_id', 'pickup_date delivery_date total_cost') // Populate order details
      .populate('delivery_agent_id', 'name email phone_number'); // Populate delivery agent details

    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }

    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a delivery by ID
export const updateDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const { delivery_status, delivery_end_time } = req.body;

    const updatedDelivery = await DeliveryModel.findByIdAndUpdate(
      id,
      { delivery_status, delivery_end_time },
      { new: true } // Return the updated document
    )
      .populate('order_id', 'pickup_date delivery_date total_cost') // Populate order details
      .populate('delivery_agent_id', 'name email phone_number'); // Populate delivery agent details

    if (!updatedDelivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }

    res.status(200).json({ message: 'Delivery updated successfully', delivery: updatedDelivery });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a delivery by ID
export const deleteDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDelivery = await DeliveryModel.findByIdAndDelete(id);

    if (!deletedDelivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }

    res.status(200).json({ message: 'Delivery deleted successfully', delivery: deletedDelivery });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};