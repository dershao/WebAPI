import * as Sequelize from "sequelize";

const ProductSchema: Sequelize.DefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
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