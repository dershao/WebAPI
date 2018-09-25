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
                    id: {
                        type: GraphQLInt,
                        description: "Find a shop by id"
                    }
                },
                resolve(root, args) {
                    return Db.models.shop.findAll({where: args});
                }
            },
            product: {
                type: new GraphQLList(ProductGraphQLType),
                args: {
                    id: {
                        type: GraphQLInt,
                        description: "Find a product by id"
                    },
                    shop_id: {
                        type: new GraphQLList(GraphQLInt),
                        description: "Specify products from the following shop ids"
                    }
                },
                resolve(root, args) {
                    return Db.models.product.findAll({where: args});
                }
            },
            order: {
                type: new GraphQLList(OrderGraphQLType),
                args: {
                    id: {
                        type: GraphQLInt,
                        description: "Find an order by id"
                    },
                    shop_id: {
                        type: new GraphQLList(GraphQLInt),
                        description: "Specify orders from the following shop ids"
                    }
                },
                resolve(root, args) {
                    return Db.models.order.findAll({where: args});
                }
            },
            lineItem: {
                type: new GraphQLList(LineItemGraphQLType),
                args: {
                    id: {
                        type: GraphQLInt,
                        description: "Find a line item by id"
                    },
                    product_id: {
                        type: new GraphQLList(GraphQLInt),
                        description: "Specify line items of the following products"
                    },
                    order_id: {
                        type: new GraphQLList(GraphQLInt),
                        description: "Specify line items of the following orders"
                    }
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
    //mutation: Mutation
});

export default graphQLSchema;