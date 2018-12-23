import * as Sequelize from "sequelize";

const LineItemSchema: Sequelize.DefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
};

export default LineItemSchema;
