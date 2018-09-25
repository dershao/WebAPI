import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt } from "graphql";
import ShopGraphQLType from "./ShopGraphQLType";
import ProductGraphQLType from "./ProductGraphQLType";
import OrderGraphQLType from "./OrderGraphQLType";
import LineItemGraphQLType from "./LineItemGraphQLType";
import {DbConnect} from "../config/DbConnect";

const Db = DbConnect.getInstance();

const Query: GraphQLObjectType = new GraphQLObjectType({
    name: "query",
    description: "root query",
    fields: () => {
        return {
            shop: {
                type: new GraphQLList(ShopGraphQLType),
                args: {

                },
                resolve(root, args) {
                    return Db.models.shop.findAll({where: args});
                }
            },
            product: {
                type: new GraphQLList(ProductGraphQLType),
                args: {
                    shopId: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args) {
                    return Db.models.product.findAll({where: args});
                }
            },
            order: {
                type: new GraphQLList(OrderGraphQLType),
                args: {

                },
                resolve(root, args) {
                    return Db.models.order.findAll({where: args});
                }
            },
            lineItem: {
                type: new GraphQLList(LineItemGraphQLType),
                args: {

                },
                resolve(root, args) {
                    return Db.models.lineItem.findAll({where: args});
                }
            }
        }
    }
});

const Mutation: GraphQLObjectType = new GraphQLObjectType({
    name: "mutation",
    description: "mutation queries",
    fields: () => {
        return {

        }
    }
});

const graphQLSchema: GraphQLSchema = new GraphQLSchema({
    query: Query,
});

export default graphQLSchema;