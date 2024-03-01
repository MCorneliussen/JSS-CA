var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport')
var session = require('express-session');
var JsonStore = require('express-session-json')(session);
const memeData = require('./services/memeData');


var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var memeRouter = require('./routes/meme');
var memesRouter = require('./routes/memes');

var app = express();

memeData.fetchMemes();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/'));


app.use(session({
	secret: 'Monkey see Monkey Do',
	resave: false,
	saveUninitialized: false,
	store: new JsonStore()
}));

app.use(passport.initialize());
app.use(passport.authenticate('session'));

app.use((req, res, next) => {
	res.locals.user = req.user || null;
	next();
});

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/meme', memeRouter);
app.use('/memes', memesRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;

