import * as Sequelize from "sequelize";

const ProductSchema: Sequelize.DefineAttributes = {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
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