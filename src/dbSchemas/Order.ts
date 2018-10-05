import * as Sequelize from "sequelize";

const OrderSchema: Sequelize.DefineAttributes = {
    shopId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    }
};

export default OrderSchema;
