// Imports
const express = require('express');
const logger = require("./public/middleware/logger.js");
const exphbs = require ('express-handlebars');

// Globals
const app = express();
const port = 3000;

// Give permission to use all files within public
app.use(express.static('./public'));

//Initiate middleware functions
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(logger);

// Incorporate router logic
app.use('/', require('./public/router/routes.js'));

// Start server
var server = app.listen(port, function() {
   console.log(`Server listening on http://localhost:${port}`);
})