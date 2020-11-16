"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _irregular = _interopRequireDefault(require("./routes/irregular"));

var _remove = _interopRequireDefault(require("./routes/remove"));

var _people = _interopRequireDefault(require("./model/people"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json()); // home

app.get('/', function (req, res) {
  _people["default"].find({}).then(function (people) {
    /* find arama yapacağı alan {} hepsini */
    res.send(people);
  });
}); // route

app.use('/irregular', _irregular["default"]);
app.use('/remove', _remove["default"]);
app.use(function (req, res, next) {
  res.status(404).json('Not Found');
});
var uri = // eslint-disable-next-line max-len
'mongodb+srv://datamerge:2020denizli@cluster0.xl2tb.mongodb.net/<dbname>?retryWrites=true&w=majority';
var options = {
  server: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  useNewUrlParser: true,
  useUnifiedTopology: true
};

_mongoose["default"].connect(uri, options);

var db = _mongoose["default"].connection;
db.on('error', console.error.bind(console, 'connection error:')); // listen

var porta = process.env.PORT || 8080;
app.listen(porta, function () {
  return console.log('Example app listening on port 8080!');
});
//# sourceMappingURL=index.js.map