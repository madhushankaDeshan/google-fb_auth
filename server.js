

const path = require('path');
const http = require('http');
const express = require('express');
const cookieParser      =     require('cookie-parser')
const bodyParser        =     require('body-parser')

const publicPath = path.join(__dirname, '/index.html');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);


app.use(express.static(publicPath));

app.set('view engine', 'html');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/'));


app.get('/', function(req, res){
    res.render('index');
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});

