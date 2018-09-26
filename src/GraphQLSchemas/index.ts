import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLBoolean } from "graphql";
import ShopGraphQLType from "./ShopGraphQLType";
import ProductGraphQLType from "./ProductGraphQLType";
import OrderGraphQLType from "./OrderGraphQLType";
import LineItemGraphQLType from "./LineItemGraphQLType";
import {DbConnect} from "../config/DbConnect";
import {DbSchemaMap} from "../dbSchemas/DbSchemaMap";

const dbSchemas =  DbSchemaMap.getInstance();
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
                    shopId: {
                        type: new GraphQLList(GraphQLInt),
                        description: "Specify products from the following shop ids"
                    }
                },
                resolve(root, args) {

                    Db.models.product.findAll({where: args})
                        .then((data) => {
                            console.log(data);
                        });

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
                    shopId: {
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
                    productId: {
                        type: new GraphQLList(GraphQLInt),
                        description: "Specify line items of the following products"
                    },
                    orderId: {
                        type: new GraphQLList(GraphQLInt),
                        description: "Specify line items of the following orders"
                    }
                },
                resolve(root, args) {
                    return Db.models.lineItem.findAll({where: args});
                }
            }
        };
    }
});

const Mutation: GraphQLObjectType = new GraphQLObjectType({
    name: "mutation",
    description: "mutation queries",
    fields: () => {
        return {
            createShop: {
                type: ShopGraphQLType,
                description: "Create a new shop",
                args: {
                    id: {
                        type: GraphQLInt,
                        description:  "ID to identify shop"
                    },
                    name: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: "Name of the shop"
                    }
                },
                resolve: (root, args) => {
                    return dbSchemas.shop.create({
                        id: args.id,
                        name: args.name
                    });
                }
            },
            deleteShop: {
                type: GraphQLBoolean,
                description: "Delete a shop",
                args: {
                    name: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: "Name of the shop to delete"
                    }
                },
                resolve: (root, args) => {
                    Db.models.shop.destroy({where: args})
                        .then(() => {
                            return true;
                        })
                        .catch((err) => {
                            return false;
                        });
                }
            },
            createProduct: {
                type: ProductGraphQLType,
                description: "Create a new product",
                args: {
                    name: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: "Product name"
                    },
                    shopId: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: "Shop ID that product belongs to"
                    },
                    price: {
                        type: new GraphQLNonNull(GraphQLFloat),
                        description: "Price of product"
                    }
                },
                resolve: (root, args) => {
                    return Db.models.product.create({
                        name: args.name,
                        shopId: args.shopId,
                        price: args.price
                    });
                }
            },
            deleteProduct: {
                type: GraphQLBoolean,
                description: "Delete a product",
                args: {
                    name: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: "Product name"
                    },
                },
                resolve: (root, args) => {
                    Db.models.product.destroy({where: args})
                        .then(() => {
                            return true;
                        })
                        .catch((err) => {
                            return false;
                        });
                }
            }
        };
    }
});

const graphQLSchema: GraphQLSchema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

export default graphQLSchema;