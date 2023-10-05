// remove.js
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDirectory)) {
  const files = fs.readdirSync(logsDirectory);
  console.log('Files to delete:');
  files.forEach((file) => {
    console.log(file);
    fs.unlinkSync(path.join(logsDirectory, file));
  });

  fs.rmdirSync(logsDirectory);
} else {
  console.log('Logs directory does not exist.');
}
