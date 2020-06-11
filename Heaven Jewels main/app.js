const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

mongoose.connect('localhost:27017/');

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(cors());

//Express body parser
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json({extended:false}));

//express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//Routes
app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));
app.use('/gold',require('./routes/gold'));
app.use('/gems',require('./routes/gems'));
app.use('/diamond',require('./routes/diamond'));
app.use('/silver', require('./routes/silver'));
app.use('/platinum', require('./routes/platinum'));
 



app.use(express.static(path.join(__dirname, 'public')));

 
const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));