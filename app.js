require('dotenv').config();

const express = require('express');
const expressLayout = require("express-ejs-layouts");
const app = express();
const PORT = 65312 || process.env.PORT;

//use of assets folder in public
app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}`);
})
