class Users {
  constructor() {
    this.users = new Map();
  }

  getUsers() {
    return Array.from(this.users.values());
  }

  getUser(id) {
    return this.users.get(id);
  }

  addUser(id, data) {
    return this.users.set(id, data);
  }

  updateUser(id, data) {
    const user = this.users.get(id) || {};

    this.users.set(id, { ...user, ...data });
  }

  delete(id) {
    this.users.delete(id);
  }
}

module.exports = new Users();
