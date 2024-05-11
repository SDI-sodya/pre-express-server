let users = [];

class User {
	static async create(userData) {
		const newUser = { ...userData };
		newUser.id = users.length;
		newUser.createdAt = new Date();

		users.push(newUser);

		return newUser;
	}
	static async findAll() {
		return users;
	}
	static async findOne(id) {
		const user = users.find((user) => users.id === id);

		return user;
	}
	static async update(id, newUserData) {
    users.map(user => {
      if(user.id !== id){
        return user;
      }

      const updatedUser = {...user, ...newUserData};
      return updatedUser;
    });

    const updatedUser = await User.findOne(id);
    return updatedUser;
  }
	static async delete(id) {
    const deletedUser = await User.findOne(id);

		users = users.filter((user) => user.id !== id);
    return deletedUser;
	}
}

module.exports = User;

// модель може кидати помилки
