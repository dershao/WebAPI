import {
    GraphQLObjectType, 
    GraphQLInt,
    GraphQLNonNull,
} from "graphql";

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
            price: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(order) {
                    return order.price;
                }  
            }
        };
    }
});

export default Order;