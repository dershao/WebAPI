import {
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull,
} from "graphql";
import LineItem from "./LineItemSchema";

const Order: GraphQLObjectType = new GraphQLObjectType({
    name: "Order",
    description:  "Shop contains many orders",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(order) {
                    return order.id;
                }
            },
            shop_id: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(order) {
                    return order.shop_id;
                }
            },
            price: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(order) {
                    return order.price;
                }  
            }
        }
    }
});

export default Order;