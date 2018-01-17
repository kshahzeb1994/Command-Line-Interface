const mongoose = require('mongoose');

//Map global promise
mongoose.promise = global.Promise;
//Connect to db
const db = mongoose.connect('mongodb://localhost:27017/customerinfo', {
  useMongoClient: true
});
