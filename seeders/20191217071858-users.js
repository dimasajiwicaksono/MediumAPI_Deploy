'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        fullname: 'dimas aji wicaksono',
        username: 'dajiwicaksono',
        email: 'dimasajiwicaksono@gmail.com',
        password: 'xxxxx',
        is_active: 1
      },
      {
        fullname: 'dimas aji',
        username: 'daji',
        email: 'dimasawicaksono@gmail.com',
        password: 'xxxxx',
        is_active: 0
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};