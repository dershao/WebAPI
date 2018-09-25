import * as Sequelize from "sequelize";

const ShopSchema: Sequelize.DefineAttributes = {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
    }
};

export default ShopSchema;