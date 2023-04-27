const fs = require('fs/promises');
const filePath = require('./filePath');

const rewriteFile = async (data) => {
  const result = await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  return result;
};

module.exports = rewriteFile;
