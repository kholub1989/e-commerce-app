const fs = require('fs');

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error('Creating a repository requiers a filename');
    }
    this.filename = filename;
    try {
      false.accessSync(this.filename);
    } catch (error) {
      fs.writeFileSync(this.filename, '[]');
    }
  }
}

const repo = new UsersRepository('users.json');
