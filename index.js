const { program } = require('commander');
const users = require('./actions');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'getAllUsers':
      const allUsers = await users.getAllUsers();
      console.log(allUsers);
      break;

    case 'getUserById':
      const user = await users.getUserById(id);
      console.log(user);
      break;

    case 'addUser':
      const newUser = await users.addUser({ name, email, phone });
      console.log('Recorded successfully');
      break;

    case 'removeUser':
      const removeUser = await users.removeUser(id);
      console.log(removeUser);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// invokeAction({ action: 'getAllUsers' });
// invokeAction({ action: 'getUserById', id: 3 });
// invokeAction({
//   action: 'addUser',
//   name: 'Peter',
//   email: 'peterparker@gmail.com',
//   phone: '333-444-555',
// });

// invokeAction({
//   action: 'removeUser',
//   id: 10,
// });

program
  .option('--action <type>')
  .option('--id <type>')
  .option('--name <type>')
  .option('--email <type>')
  .option('--phone <type>');

program.parse();

const options = program.opts();
invokeAction(options);
