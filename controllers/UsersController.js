const usersReposotiry = require('../repositories/users');

class UsersController {
  getUsers() {
    return usersReposotiry.getUsers();
  }

  getUser(id) {
    const user = usersReposotiry.getUser(id);

    if (!user) throw new Error('User not found');

    return user;
  }

  addUser(id, data) {
    return usersReposotiry.addUser(id, data);
  }

  updateUser(id, data) {
    return usersReposotiry.updateUser(id, data);
  }

  removeUser(id) {
    return usersReposotiry.delete(id);
  }
}

module.exports = UsersController;
