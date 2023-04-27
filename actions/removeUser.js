const filePath = require('./helpers/filePath');
const rewriteFile = require('./helpers/rewriteFile');
const getUsers = require('./getUsers');

const removeUser = async (id) => {
  const users = await getUsers();

  const userIndex = users.findIndex((userIdx) => String(userIdx.id) === id);
  if (userIndex === -1) {
    return 'User not found';
  }

  const [result] = users.splice(userIndex, 1);
  await rewriteFile(users);
  console.log('User removed');
  return result;
};

module.exports = removeUser;
