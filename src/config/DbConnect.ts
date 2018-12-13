import * as Sequelize from "sequelize";

export class DbConnect {

    private static db: Sequelize.Sequelize;

    private constructor() {}

    public static getInstance(): Sequelize.Sequelize {

        if (!this.db) {
            this.db = new Sequelize(process.env.DB_URI, null, null, {
                dialect: process.env.DB_DIALECT,
                storage: process.env.DB_STORAGE,
                operatorsAliases: false
            });
        }
        return this.db;
    }
}