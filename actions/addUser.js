const rewriteFile = require('./helpers/rewriteFile');
const getUsers = require('./getUsers');
const { v4: uuidv4 } = require('uuid');

const addUser = async ({ name, email, phone }) => {
  const users = await getUsers();

  const newUser = {
    id: uuidv4(),
    name,
    email,
    phone,
  };

  users.push(newUser);

  const result = await rewriteFile(users);
  return result;
};

module.exports = addUser;
