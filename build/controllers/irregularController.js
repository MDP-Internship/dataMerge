"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = irregularController;

var _helpers = _interopRequireDefault(require("../utils/helpers"));

var _irregularServices = _interopRequireDefault(require("../services/irregularServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function irregularController(_req, _res) {
  _helpers["default"].dataMerge(_req.body, function (result) {
    // console.log(result);
    _irregularServices["default"].peopleAdd(result);
  });
}
//# sourceMappingURL=irregularController.js.map