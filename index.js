const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const connectDB = require('../MongoDB_Project/app/configure_DB/index');
const route = require("../MongoDB_Project/app/router/index");

app.use(express.json());   // app.use(bodyParser.json());

route.init(app);

connectDB();
const port = process.env.port || 3000;
app.listen(port, (res) => {
    console.log(`Listening on port ${port}`);
});