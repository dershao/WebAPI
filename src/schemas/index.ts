import ShopSchema from "./ShopSchema";
import ProductSchema from "./ProductSchema";
import { GraphQLObjectType, GraphQLSchema } from "graphql";

const Query: GraphQLObjectType = new GraphQLObjectType({
    name: "query",
    description: "root query",
    fields: () => {
        return {
            
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

const Schema: GraphQLSchema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

export default Schema;