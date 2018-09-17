import * as Sequelize from "sequelize";

const ShopSchema: Sequelize.DefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    }
};

export default ShopSchema;