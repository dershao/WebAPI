import {
    GraphQLObjectType, 
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
} from "graphql";
import LineItem from "./LineItemGraphQLType";

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
            shopId: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(order) {
                    return order.shopId;
                }
            },
            total: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(order) {
                    return order.total;
                }  
            },
            lineItem: {
                type: new GraphQLList(LineItem),
                resolve(order) {
                    
                    return order.getLineItems();
                }
            }
        };
    }
});

export default Order;