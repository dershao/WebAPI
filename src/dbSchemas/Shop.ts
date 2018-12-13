import * as Sequelize from "sequelize";

const ShopSchema: Sequelize.DefineAttributes = {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
    }
};

export default ShopSchema;