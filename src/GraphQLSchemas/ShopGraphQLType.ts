import {
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString,
    GraphQLNonNull,
} from "graphql";

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
            }
        }
    }
});

export default Shop;