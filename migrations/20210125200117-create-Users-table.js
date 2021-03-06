'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			displayName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			email: {
        type: Sequelize.STRING,
        unique: true,
				allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
      },
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	}
};
