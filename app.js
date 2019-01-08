var express = require('express');

var app = express();


app.set('view engine', 'ejs')

//routes
var routes = require('./routes')

var path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

//home

app.get('/', routes.home);

app.get('/Harry_Potter_episode/:episode_number?', routes.movie_single)

app.get('*', routes.notFound)

app.listen(process.env.PORT || 3000)