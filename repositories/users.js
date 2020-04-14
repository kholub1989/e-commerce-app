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
    // Open the file called this.filename
    const contents = await fs.promises.readFile(this.filename, {
      encoding: 'utf-8',
    });
    // Read its content
    console.log(contents);
    // Parse the content
    // Return the parsed data
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');
  await repo.getAll();
};

test();
