const fs = require("fs");
const path = require("path");

const directory = "test";
const dir = "/multiple";
const content = "writing on the file";

const readFile = () => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      console.log('deleting file ... ' + file);
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
  });
};

const createDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(process.cwd() + dir, {
      recursive: true,
    });
  }
};
