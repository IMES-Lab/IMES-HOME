var express = require("express");
var app = express();
var fs = require("fs");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static("data"));
app.use(express.static('public'));

app.get('/', function (req, res) {
	var meta = JSON.parse(fs.readFileSync(__dirname + '/data/news.json', 'utf8'));
	res.render("index.html", meta);
});

app.get(/\/$/, function (req, res) {
	res.redirect(req.originalUrl.slice(0, -1));
})

app.get('/people.html', function (req, res) {
	var meta = JSON.parse(fs.readFileSync(__dirname + '/data/people.json', 'utf8'));
	res.render("people.html", meta);
});

app.get('/news.html', function (req, res) {
	var meta = JSON.parse(fs.readFileSync(__dirname + '/data/news.json', 'utf8'));
	res.render("news.html", meta);
});

app.get('/research.html', function (req, res) {
	var meta = JSON.parse(fs.readFileSync(__dirname + '/data/research.json', 'utf8'));
	res.render("research.html", meta);
});

app.get('/memories.html', function (req, res) {
	var meta = JSON.parse(fs.readFileSync(__dirname + '/data/memories.json', 'utf8'));
	res.render("memories.html", meta);
});

app.get('/index.html', function (req, res) {
	var meta = JSON.parse(fs.readFileSync(__dirname + '/data/news.json', 'utf8'));
	res.render("index.html", meta);
});

app.listen(1347, function () {
	console.log('Server running on port 1347!')
});