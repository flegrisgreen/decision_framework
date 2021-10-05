// Imports
const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv')
const morgan = require ('morgan')
const connectDB = require('./config/db')
const path = require('path')

// Load config
dotenv.config({path: './config/config.env'})

// Connect to MongoDB database
connectDB()

// Create express app
const app = express();

// Logging (only used in development)
if(process.env.NODE_ENV === 'development'){
   app.use(morgan('dev'))
}

//port
const PORT = process.env.PORT || 5000

//Handlebars template engine
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Bodyparser
app.use(express.urlencoded({ extended:false }));

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// Start server
var server = app.listen(PORT, function() {
   console.log(`Server running in ${process.env.NODE_ENV} listening on http://localhost:${PORT}`);
});