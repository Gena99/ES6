'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//to do server
var app = (0, _express2.default)();
var urlJson = 'database/tasks.json';
app.use(_express2.default.static(__dirname + '/public'));
app.use(_bodyParser2.default.json()); // support json encoded bodies
app.use(_bodyParser2.default.urlencoded({ extended: true })); // support encoded bodies


app.listen(3337, function () {
	console.log('coucou');
});
