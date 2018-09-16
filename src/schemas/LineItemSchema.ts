import {
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull,
} from "graphql";

const LineItem = new GraphQLObjectType({
    name: "Line Item",
    description:  "Shop contains many line items",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(item) {
                    return item.id;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                resolve(item) {
                    return item.name;
                }
            },
            value: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(item) {
                    return item.value;
                }  
            },
        }
    }
});

export default LineItem;