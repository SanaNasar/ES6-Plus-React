require("babel/register");

var koa = require('koa'); // require server: koa
var route = require('koa-route');
var serve = require('koa-static');
var mount = require('koa-mount');
var React = require('react');
var _ = require('lodash');
var fs = require('fs');
//load the baseTemplate.html- this will read it out of the file system
var baseTemplate = fs.readFileSync('./baseTemplate.html');
var ClientApp = require('./jsx/index.jsx');

var app = koa();

// similar to express using app.use
app.use(mount('/fa', serve('../node_modules/font-awesome')));
// serve is telling to go look at the server and that directory
app.use(mount('/public', serve('./public')));

// passing a generator function inside as argument
app.use(route.get('/', function *(){
  var rendered = React.renderToString(React.createElement(
    ClientApp));
  this.body = _template(baseTemplate) ({body:rendered});
}));

app.listen(3000);