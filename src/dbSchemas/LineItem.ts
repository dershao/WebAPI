import * as Sequelize from "sequelize";

const LineItemSchema: Sequelize.DefineAttributes = {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    order_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    }
};

export default LineItemSchema;
