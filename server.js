const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(routes);

app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
