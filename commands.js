const program = require('commander');
const { prompt } = require ('inquirer');
const {
    addCustomer,
    findCustomer
} = require('./index');

const question = [
{    type: 'input',
    name: 'firstname',
    message: 'customer\'s first name'
},
{    type: 'input',
    name: 'lastname',
    message: 'customer\'s last name'
},
{    type: 'input',
    name: 'phone',
    message: 'customer\'s phone number'
},
{    type: 'input',
    name: 'email',
    message: 'customer\'s email address'
}
];

program
    .version('1.0.0')
    .description('Client Management System')

// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({firstname, lastname, phone, email});
//     });

program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(question).then(answers => addCustomer(answers))
    });

program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action(name => findCustomer(name));

program.parse(process.argv);
