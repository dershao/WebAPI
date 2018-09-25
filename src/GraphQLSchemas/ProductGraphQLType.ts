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
            shop_id: {
                type: new GraphQLNonNull(GraphQLInt),
                resolve(product) {
                    return product.shop_id;
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
        }
    }
});

export default Product;