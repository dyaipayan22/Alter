import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: [{ type: String, required: true }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    name: {
      type: String,
      required: [true, 'Name cannot be empty'],
    },
    image: [{ type: String, required: true }],
    category: {
      type: String,
      required: [true, 'Category cannot be empty'],
    },
    brand: { type: String, required: [true, 'Brand cannot be empty'] },
    gender: {
      type: String,
      required: [true, 'Gender cannot be empty'],
      enum: {
        values: ['Male', 'Female', 'Unisex'],
        message: '{VALUE} is not valid',
      },
    },
    variants: [
      {
        size: {
          type: String,
          required: [true, 'Size cannot be empty'],
          enum: {
            values: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
            message: '{VALUE} is not a valid size',
          },
        },
        quantity: {
          type: Number,
          required: [true, 'Quantity cannot be empty'],
          default: 0,
        },
        color: {
          type: String,
          required: [true, 'Color cannot be empty'],
        },
        // image: {
        //   type: String,
        //   required: [true, 'Image cannot be empty'],
        // },
      },
    ],
    description: {
      type: String,
      required: [true, 'Product description cannot be empty'],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Price cannot be empty'],
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.pre('save', function (next) {
  const totalQty = this.variants.reduce(
    (total, item) => total + item.quantity,
    0
  );
  this.stock = totalQty;
  next();
});

const Product = mongoose.model('Product', productSchema);

export default Product;
