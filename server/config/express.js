/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');
var passport = require('passport');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');

module.exports = function(app) {
  var env = app.get('env');

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(passport.initialize());

  // Persist sessions with mongoStore / sequelizeStore
  // We need to enable sessions for passport twitter because its an oauth 1.0 strategy
  app.use(session({
    //Secret: This is a string that is used to generate the session ID cookie.
    secret: config.secrets.session,
    //Resave: This forces the session to always save back to the server even if it has not been modified.
    resave: true,
    //SaveUninitialized: This is a session which is uninitialized when it is new. This option forces the session to be saved even when it is new and unmodified.
    saveUninitialized: true,
    //Store: This is where the session data is saved. By default, it is stored in the memory (MemoryStore). However, we are using MongoDB instead with connect-mongo. Another popular storage option is (connect-redis) Redis.
    store: new mongoStore({
      mongooseConnection: mongoose.connection,
      db: 'meanshop'
    })
  }));

  app.set('appPath', path.join(config.root, 'client'));

  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};
