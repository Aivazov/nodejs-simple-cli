const getAllUsers = require('./getUsers');

const getUserById = async (id) => {
  const users = await getAllUsers();

  const result = users.find((user) => String(user.id) === id);
  return result || 'user not found';
};

module.exports = getUserById;
