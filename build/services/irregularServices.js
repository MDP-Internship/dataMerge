"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _people = _interopRequireDefault(require("../model/people"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IrregularServices = /*#__PURE__*/function () {
  function IrregularServices() {
    _classCallCheck(this, IrregularServices);
  }

  _createClass(IrregularServices, null, [{
    key: "peopleAdd",
    value: function peopleAdd(body) {
      var peopleAdd = (0, _people["default"])({
        id: body.id,
        mail: body.mail,
        adress: body.adress,
        name: body.name,
        username: body.username
      });
      peopleAdd.save().then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        res.json({
          mesaage: err
        });
      });
    } // console.log(body);

  }]);

  return IrregularServices;
}();

exports["default"] = IrregularServices;
;
//# sourceMappingURL=irregularServices.js.map