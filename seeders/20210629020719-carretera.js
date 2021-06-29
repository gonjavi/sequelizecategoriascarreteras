'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Carreteras', [{
      name: 'first ave.',
      categoriaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'calle 2',
      categoriaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'calle 3',
      categoriaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'calle 4',
      categoriaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'second ave.',
      categoriaId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'third ave.',
      categoriaId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'fourth ave.',
      categoriaId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'fifth ave.',
      categoriaId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    } 
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Carreteras', null, {});
  }
};
