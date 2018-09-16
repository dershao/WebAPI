import {
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull,
} from "graphql";
import LineItem from "./LineItemSchema";

const Order = new GraphQLObjectType({
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
            name: {
                type: new GraphQLNonNull(GraphQLString),
                resolve(order) {
                    return order.name;
                }
            },
            value: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(order) {
                    return order.value;
                }  
            },
            lineItems: {
                type: new GraphQLList(LineItem),
                resolve(order) {
                    return order.getItems();
                }
            }
        }
    }
});

export default Order;