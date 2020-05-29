const express = require('express'),
      path = require('path'),
      morgan = require('morgan')


const app = express();

// importing routes
const productoRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));

// routes
app.use('/', productoRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
