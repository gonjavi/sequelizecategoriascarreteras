'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categoria', [{
      name: 'locales',
      categoriaId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'comerciales',
      categoriaId: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'regionales',
      categoriaId: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'nacionales',
      categoriaId: '4',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'autovias',
      categoriaId: '5',
      createdAt: new Date(),
      updatedAt: new Date(),
    } 
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categoria', null, {});
  }
};
