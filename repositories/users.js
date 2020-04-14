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
  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: 'utf-8',
      })
    );
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');
  const users = await repo.getAll();
  console.log(users);
};

test();
