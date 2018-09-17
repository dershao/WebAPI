import * as Sequelize from "sequelize";

const ProductSchema: Sequelize.DefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    }
};

export default ProductSchema;