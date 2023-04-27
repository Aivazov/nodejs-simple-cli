const fs = require('fs/promises');
const filePath = require('./helpers/filePath');

const getAllUsers = async () => {
  const data = await fs.readFile(filePath);
  return JSON.parse(data);
};

module.exports = getAllUsers;
