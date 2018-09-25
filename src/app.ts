import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import graphQlSchemas from "./GraphQLSchemas";
import {DbConnect} from "./config/DbConnect";
import {DbSchemaMap} from "./dbSchemas/DbSchemaMap";

const app = express();
const port = process.env.PORT || 8080;

const dbSchemas =  DbSchemaMap.getInstance();
DbConnect.getInstance().sync({force: true}).then(() => {
    return dbSchemas.shop.create({
        id: 1,
        name: "we sell cookies"
    });
});

app.use("/graphql", graphqlHTTP({
    schema: graphQlSchemas,
    graphiql: true,
}));

app.listen(port, (err: Error) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`Server listening on port ${port}`);
});
