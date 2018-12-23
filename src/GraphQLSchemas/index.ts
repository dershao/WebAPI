import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLBoolean } from "graphql";
import ShopGraphQLType from "./ShopGraphQLType";
import ProductGraphQLType, {default as Product} from "./ProductGraphQLType";
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
                    name: {
                        type: GraphQLString,
                        description: "Name of the shop"
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
                    name: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: "Name of the shop"
                    }
                },
                resolve: (root, args) => {
                    return dbSchemas.shop.create({
                        name: args.name
                    });
                }
            },
            deleteShop: {
                type: GraphQLBoolean,
                description: "Delete a shop",
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: "ID identifying a specified shop",
                    },
                },
                resolve: (root, args) => {

                    Db.models.shop.destroy({where: args})
                        .then(() => {
                            //delete all products
                            return Db.models.product.destroy({where: args});
                        })
                        .then(() => {
                            //delete all orders
                            return Db.models.order.destroy({where: args});
                        })
                        .then(() => {
                            //delete all line items
                            return Db.models.lineItem.destroy({where: args});
                        })
                        .catch((err: Error) => {
                            throw err;
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
                    id: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: "ID identifying product"
                    }
                },
                resolve: (root, args) => {
                    Db.models.product.destroy({where: args})
                        .then(() => {
                            return Db.models.lineItem.destroy({where: args});
                        });
                }
            },
            createOrder: {
                type: OrderGraphQLType,
                description: "Create an order",
                args: {
                    shopId: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: "ID of the shop"
                    },
                    total: {
                        type: new GraphQLNonNull(GraphQLFloat),
                        description: "Price of the product"
                    }
                },
                resolve: (root, args) => {
                    return Db.models.order.create({
                       shopId: args.shopId,
                       total: args.total
                    });
                }
            },
            deleteOrder: {
                type: OrderGraphQLType,
                description: "Delete an order",
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: "ID"
                    }
                },
                resolve: (root, args) => {
                    return Db.models.order.destroy({where: args});
                }
            },
            createLineItem: {
                type: LineItemGraphQLType,
                description: "Create a line item",
                args: {
                    productId: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: "The ID of the product this line item refers to"
                    },
                    orderId: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: "The ID of the order this line item belongs to"
                    },
                    quantity: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: "Number of this line item"
                    }
                },
                resolve: (root, args) => {
                    return Db.models.lineItem.create({
                        productId: args.productId,
                        orderId: args.orderId,
                        quantity: args.quantity,
                    });
                }
            },
            deleteLineItem: {
                type: LineItemGraphQLType,
                description: "Delete a Line Item",
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: "ID of the line item to delete"
                    }
                },
                resolve: (root, args) => {
                    return Db.models.lineItem.destroy({where: args});
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