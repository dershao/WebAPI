import * as Sequelize from "sequelize";

const ProductSchema: Sequelize.DefineAttributes = {
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    shopId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    }
};

export default ProductSchema;