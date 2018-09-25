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
            product_id: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(item) {
                    return item.product_id;
                }
            },
            order_id: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(item) {
                    return item.order_id;
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
        }
    }
});

export default LineItem;