import * as Sequelize from "sequelize";

const OrderSchema: Sequelize.DefineAttributes = {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
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

export default OrderSchema;
