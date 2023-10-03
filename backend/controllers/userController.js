import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//@desc   Register user
//@route  POST /user
//@access Public
export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.json(user);
  }
});

//@desc   Get user profile
//@route  GET /user/profile
//@access Private
export const getProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@desc   Update user profile
//@route  PUT /user/profile
//@access Private
export const updateProfile = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findById(req.user);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
      user.password = password;
    }

    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@desc   Get all users
//@route  GET /user/getAllUsers
//@access Private/Admin
export const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({ role: 'user' });
  if (users) {
    res.json(users);
  } else {
    res.status(404);
    throw new Error('No users found');
  }
});

//@desc   Delete user profile
//@route  DELETE /user/:id
//@access Private/Admin
export const deleteUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.deleteOne();
    res.json({ message: 'User deleted' });
  } else {
    res.status(404);
    throw new Error('User does not exist');
  }
});

//@desc   Get user by id
//@route  GET /user/:id
//@access Private/Admin
export const getUserById = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User does not exist');
  }
});
