import {
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from "graphql";
import Product from "./ProductGraphQLType";
import Order from "./OrderGraphQLType";

const Shop: GraphQLObjectType = new GraphQLObjectType({
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
                type: new GraphQLList(Product),
                resolve(shop) {

                    return shop.getProducts();
                }
            },
            orders: {
                type: new GraphQLList(Order),
                resolve(shop) {
                    
                    return shop.getOrders();
                }
            }
        };
    }
});

export default Shop;