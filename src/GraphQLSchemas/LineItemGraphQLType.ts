import {
    GraphQLObjectType, 
    GraphQLInt,
    GraphQLNonNull,
    GraphQLFloat,
} from "graphql";

const LineItem: GraphQLObjectType = new GraphQLObjectType({
    name: "LineItem",
    description:  "Order contains many line items",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(item) {
                    return item.id;
                }
            },
            productId: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(item) {
                    return item.productId;
                }
            },
            orderId: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(item) {
                    return item.orderId;
                }
            },
            quantity: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(item) {
                    return item.name;
                }
            },
            price: {
                type: new GraphQLNonNull(GraphQLFloat),
                resolve(item) {
                    return item.price;
                }  
            },
        };
    }
});

export default LineItem;