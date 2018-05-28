import express from "express";
import routes from "./src/routes/crmRoutes";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useMongoClient: true
});

//bodyParser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and express server are running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
);