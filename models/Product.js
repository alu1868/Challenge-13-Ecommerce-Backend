// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    // Product Name
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    // Price
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },

    // Stock
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultsValue: 10,
      validate: {
        isNumeric: true
      }
    },

    // Category ID
    category_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
