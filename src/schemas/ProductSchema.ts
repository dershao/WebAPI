import { 
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull 
} from "graphql";
import LineItem from "./LineItemSchema"; 

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
            name: {
                type: new GraphQLNonNull(GraphQLString),
                resolve(product) {
                    return product.name;
                }
            },
            items: {
                type: new GraphQLList(LineItem),
                resolve(product) {
                    return product.getItems();
                }
            }
        }
    }
});

export default Product;