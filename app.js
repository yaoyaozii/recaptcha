var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var helmet = require('helmet');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'none'"],
      // scriptSrc: ["'nonce-123452'", "'nonce-123453'", "'nonce-123454'", "'nonce-123455'"],
      // styleSrc: ["'unsafe-inline'", "'nonce-123451'"]
      scriptSrc: ["https://www.google.com/recaptcha/", "https://www.gstatic.com/recaptcha/", "https://code.jquery.com/jquery-3.3.1.min.js", "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"],
      frameSrc: ["https://www.google.com/recaptcha/"],
      styleSrc: ["'unsafe-inline'", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"]
    }
  },
  frameguard: {
    action: 'deny'
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
