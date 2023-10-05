const writeFile = () => {
  var files = "";
  for (let i = 0; i < 10; i++) {
    files[i] = fs.writeFileSync(`./multiple/log${i}.txt`, "write a phrase");
    console.log(`creating files ... log${i}.txt`);
  }
}

readFile();
createDir(dir);
writeFile();