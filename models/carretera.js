'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carretera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Categoria, {
        foreignKey: 'categoriaId',
      });
    }
  };
  Carretera.init({
    name: DataTypes.STRING,
    categoriaId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carretera',
  });
  return Carretera;
};