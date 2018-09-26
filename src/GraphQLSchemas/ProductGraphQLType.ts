import { 
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString,
    GraphQLNonNull,
    GraphQLFloat 
} from "graphql";

const Product: GraphQLObjectType = new GraphQLObjectType({
    name: "Product",
    description: "Products",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(product) {
                    return product.id;
                }
            },
            shopId: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(product) {
                    return product.shopId;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                resolve(product) {
                    return product.name;
                }
            },
            price: {
                type: new GraphQLNonNull(GraphQLFloat),
                resolve(product) {
                    return product.price;
                }
            }
        };
    }
});

export default Product;