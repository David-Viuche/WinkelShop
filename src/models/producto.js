'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    nombre: DataTypes.STRING,
    marca: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {});
  Producto.associate = function(models) {
    // associations can be defined here
  };
  return Producto;
};