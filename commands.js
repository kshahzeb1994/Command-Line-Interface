const program = require('commander');
const {
  addCustomer,
  findCustomer
} = require('./index');

program
  .version('1.0.0')
  .description('Client Management System')

  program.parse(process.argv);
