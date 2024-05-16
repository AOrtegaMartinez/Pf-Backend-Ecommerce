const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('template', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,  
    }
    

  },
  {
    timestamps: false
  });
};