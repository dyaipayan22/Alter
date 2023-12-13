import expressAsyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
export const addToCart = expressAsyncHandler(async (req, res) => {
  const { product, quantity, size } = req.body;
  // console.log(product, quantity, size);

  let cart = await Cart.findOne({ user: req.user._id }).populate({
    path: 'cartItems.product',
    select: '_id name image price category gender',
    model: 'Product',
  });

  if (!cart) {
    cart = new Cart({
      user: req.user._id,
      cartItems: [],
    });
  }

  const productExists = await Product.findById(product);

  if (!productExists) {
    res.status(404);
    throw new Error('Product not found');
  }

  const existingItem = cart.cartItems.find(
    (item) => item.product.toString() === product && item.size === size
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.cartItems.push({
      product,
      quantity,
      size,
    });
  }
  await cart.save();
  res.json(cart.cartItems);
});

// @desc    Remove item to cart
// @route   PUT /api/cart
// @access  Private
export const removeFromCart = expressAsyncHandler(async (req, res) => {
  const { product } = req.body;

  const cart = await Cart.findOne({ user: req.user._id }).populate({
    path: 'cartItems.product',
    select: '_id name image price category gender',
    model: 'Product',
  });

  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  const itemIndex = cart.cartItems.findIndex(
    (item) => item.product._id.toString() === product
  );

  if (itemIndex === -1) {
    res.status(404);
    throw new Error('Item not found in cart');
  }

  cart.cartItems.splice(itemIndex, 1);
  await cart.save();
  res.json(cart.cartItems);
});

// @desc    Clear cart
// @route   PUT /api/cart/clear
// @access  Private
export const clearCart = expressAsyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate({
    path: 'cartItems.product',
    select: '_id name image price category gender',
    model: 'Product',
  });

  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  cart.cartItems = [];

  await cart.save();
  res.json(cart.cartItems);
});

// @desc    Get items from cart
// @route   GET /api/cart
// @access  Private
export const getCartItems = expressAsyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate({
    path: 'cartItems.product',
    select: '_id name image price category gender',
    model: 'Product',
  });

  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  const items = cart?.cartItems?.map((item) => ({
    product: item.product,
    quantity: item.quantity,
    size: item.size,
  }));

  res.json(items);
});
