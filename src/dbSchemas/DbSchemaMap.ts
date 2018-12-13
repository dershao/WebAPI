import {DbConnect} from "../config/DbConnect";
import LineItemSchema from "./LineItem";
import OrderSchema from "./Order";
import ProductSchema from "./Product";
import ShopSchema from "./Shop";

export class DbSchemaMap {

    private static __instance: DbSchemaMap = new DbSchemaMap();

    public lineItem;
    public product;
    public order;
    public shop;  
    
    private constructor() {
        this.initSchemas();
    }

    private initSchemas(): void {

        const DbInstance = DbConnect.getInstance();

        this.lineItem = DbInstance.define("lineItem", LineItemSchema);
        this.product = DbInstance.define("product", ProductSchema);
        this.order = DbInstance.define("order", OrderSchema);
        this.shop = DbInstance.define("shop", ShopSchema);

        this.product.belongsTo(this.shop);
        this.shop.hasMany(this.product);
    }

    public static getInstance(): DbSchemaMap {
        
        return this.__instance;
    }
}
