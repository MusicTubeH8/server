var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lyricsRouter = require('./routes/lyrics');
var topchartRouter = require('./routes/topchart');
var youtubeRouter = require('./routes/youtube');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lyrics', lyricsRouter);
app.use('/topcharts', topchartRouter);
app.use('/youtube', youtubeRouter);

module.exports = app;
