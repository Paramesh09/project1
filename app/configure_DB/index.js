const mongoose = require('mongoose');

// // const MONGO_USERNAME = 'Paramesh';
// // const MONGO_PASSWORD = 'SmartWork@123';
// const MONGO_HOSTNAME = 'localhost';
// const MONGO_PORT = 27017;
// const MONGO_DB = 'Demo';

// const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// mongoose.connect(url, {useNewUrlParser: true});

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://localhost:27017/Demo`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  }

// module.exports = {
//   url : url
// }
module.exports = connectDB;