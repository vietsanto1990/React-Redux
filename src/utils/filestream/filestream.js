const fs = require('fs'); // eslint-disable-line

class FileStream {
  readJsonFile (path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(JSON.parse(data));
      });
    });
  }
}

export default new FileStream();