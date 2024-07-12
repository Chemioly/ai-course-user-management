const mongoose = require('mongoose');

const username = 'adminUser';
const password = 'securePassword123';
const host = '127.0.0.1';
const port = 27017;
const dbName = 'admin';

const url = `mongodb://${username}:${password}@${host}:${port}/${dbName}`;

mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
})
.then(() => {
  console.log('Connected to MongoDB successfully');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});