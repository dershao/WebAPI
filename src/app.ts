import * as express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, (err: Error) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send("<!DOCTYPE html><html><body><p>Hi</p></body></html>");
});