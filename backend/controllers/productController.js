import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc   Fetch all products
//@route  GET /product
//@access Public
export const getProducts = expressAsyncHandler(async (req, res) => {
  const limit = 10;
  const page = Number(req.query.page) || 1;

  const search = req.query.search
    ? {
        name: {
          $regex: req.query.search,
          $options: 'i',
        },
      }
    : {};

  let sortBy = { rating: -1 };
  if (req.query.sort) {
    const parts = req.query.sort.split(':');
    sortBy[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }

  const count = await Product.countDocuments();
  const products = await Product.find({ ...search })
    .sort(sortBy)
    .limit(limit)
    .skip(limit * (page - 1));
  res.json({
    products,
    page,
    pages: Math.ceil(count / limit),
    results: count,
  });
});

//@desc   Fetch single product
//@route  GET /product/:id
//@access Public
export const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Create a product
// @route   POST /product
// @access  Private/Admin
export const createProduct = expressAsyncHandler(async (req, res) => {
  const {
    name,
    images,
    category,
    brand,
    gender,
    variants,
    description,
    price,
    stock,
    isFeatured,
  } = req.body;
  const product = await Product.create({
    name,
    images,
    category,
    brand,
    gender,
    variants,
    description,
    price,
    stock,
    isFeatured,
  });

  if (product) {
    res.status(201).json(product);
  }
});

// @desc    Update a product
// @route   PUT /product/:id
// @access  Private/Admin
export const updateProduct = expressAsyncHandler(async (req, res) => {
  const {
    name,
    images,
    category,
    brand,
    gender,
    variants,
    description,
    price,
    stock,
    isFeatured,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.images = images || product.images;
    product.category = category || product.category;
    product.brand = brand || product.brand;
    product.gender = gender || product.gender;
    product.variants = variants || product.variants;
    product.description = description || product.description;
    product.price = price || product.price;
    product.stock = stock || product.stock;
    product.isFeatured = isFeatured || product.isFeatured;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Delete a product
// @route   DELETE /product/:id
// @access  Private/Admin
export const deleteProduct = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    //const products = await Product.find({});
    res.json({ message: 'Product deleted' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Create new review
// @route   POST /product/:id/reviews
// @access  Private
export const createProductReview = expressAsyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Get featured products
// @route   GET /product/featured
// @access  Public
export const getFeaturedProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({ isFeatured: true });
  res.json(products);
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
export const getTopProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});
