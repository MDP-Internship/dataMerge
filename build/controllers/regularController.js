"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = regularService;

var _people = _interopRequireDefault(require("../model/people"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function regularService(_req, _res) {
  _people["default"].find({}).then(function (people) {
    //find arama yapacağı alan {} hepsini
    _res.send(people);
  });
}
//# sourceMappingURL=regularController.js.map