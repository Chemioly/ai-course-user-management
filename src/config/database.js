const mongoose = require('mongoose');
const User = require('../models/userModel');

const username = 'adminUser';
const password = 'securePassword123';
const host = '127.0.0.1';
const port = 27017;
const dbName = 'admin';

const url = `mongodb://${username}:${password}@${host}:${port}/${dbName}`;
// const url = 'mongodb://adminUser:securePassword123@localhost:27017/admin';
//'mongodb://root:password@localhost:27017'
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;