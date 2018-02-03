const mongoose = require('mongoose');

//Map global promise
mongoose.promise = global.Promise;
//Connect to db
const db = mongoose.connect('mongodb://localhost:27017/customerinfo', {
  useMongoClient: true
});

//import of model
const Customer = require('./models/customers');

//Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then(customer => {
    console.info('New Customer Added');
    db.close();
  });
}

//Find customer
const findCustomer = (name) => {
  //Case insensitive
  const search = new RegExp(name, 'i');
  Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customer => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    });
}

const updateCustomer = (_id, customer) => {
    Customer.update({ _id}, customer)
        .then(customer => {
            console.info('Customer Updated');
            db.close();
        })
}

const removeCustomer = (_id, customer) => {
    Customer.remove({ _id})
        .then(customer => {
            console.info('Customer removed');
            db.close();
        })
}

const listCustomers = () => {
    Customer.find()
        .then(customer => {
            console.info(customers);
            console.info(`${customer.length} matches`);
            db.close;
        });
}

//Export Methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
}
