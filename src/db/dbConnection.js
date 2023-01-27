const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dbConnection = async () => {
  return mongoose.connect(process.env.DB_URL);
};

module.exports = dbConnection;