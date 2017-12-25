import fs from 'fs';

class FileStream {
  readJsonFile (path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if (err) reject(err);
        resolve(JSON.parse(data));
      });
    });
  }
}

export default new FileStream();