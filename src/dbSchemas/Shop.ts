import * as Sequelize from "sequelize";

const ShopSchema: Sequelize.DefineAttributes = {
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
    }
};

export default ShopSchema;