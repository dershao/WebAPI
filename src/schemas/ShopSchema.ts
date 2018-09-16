import {
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull,
} from "graphql";
import Order from "./OrderSchema";
import Product from "./ProductSchema";

const Shop = new GraphQLObjectType({
    name: "Shop",
    description:  "A shop",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(shop) {
                    return shop.id;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                resolve(shop) {
                    return shop.name;
                }
            },
            products: {
                type: new GraphQLList(Order),
                resolve(shop) {
                    return shop.getOrders();
                }
            },
            orders: {
                type: new GraphQLList(Product),
                resolve(shop) {
                    return shop.getProducts();
                }
            }
        }
    }
});

export default Shop;