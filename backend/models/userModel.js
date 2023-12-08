import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name cannot be empty'] },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email cannot be empty'],
    },
    password: { type: String, required: [true, 'Password cannot be empty'] },
    image: { type: String, required: true, default: 'placeholder.jpg' },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin'],
        message: '{VALUE} is not a valid role',
      },
      required: true,
      default: 'user',
    },
    googleSignup: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') && !this.googleSignup) {
    next();
  }

  if (!googleSignup) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
