// product.model
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Product = sequelize.define('Product',{
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
})

export default Product;
