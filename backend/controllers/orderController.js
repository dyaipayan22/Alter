import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import Order from '../models/orderModel.js';

export const createOrder = expressAsyncHandler(async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No items');
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      totalPrice,
    });

    await order.save();
    res.json(order);
  }
});

export const getOrderById = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

export const updateOrder = expressAsyncHandler(async (req, res) => {});
