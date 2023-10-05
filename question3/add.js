// add.js
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
  process.chdir(logsDirectory);
  console.log('Changed current directory to Logs');
}

for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file ${i}`);
  console.log(`Created ${fileName}`);
}
