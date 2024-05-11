const users = [{ id: 1 }, { id: 2 }];

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
	static async findOne() {}
	static async update() {}
	static async delete() {}
}

module.exports = User;
