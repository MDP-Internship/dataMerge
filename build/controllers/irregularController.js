"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = irregularController;

var _helpers = _interopRequireDefault(require("../utils/helpers"));

var _irregularServices = _interopRequireDefault(require("../services/irregularServices"));

var _validation = require("../utils/validation");

var _utils = _interopRequireDefault(require("../utils/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var util = new _utils["default"]();

function irregularController(req, res) {
  var personelData = req.body;

  _helpers["default"].dataMerge(personelData, function (result, idList) {
    try {
      //id string kontrolü
      if (!(0, _validation.isPersoneId)(idList).res) {
        console.log((0, _validation.isPersoneId)(idList).err);
        res.send((0, _validation.isPersoneId)(idList).err);
      } // verilerin genel kurallara uygunluğu


      if (!(0, _validation.personelInfoValidation)(result).res) {
        res.send((0, _validation.personelInfoValidation)(result).err);
      } //db yazdırılma işlemi


      if ((0, _validation.isPersoneId)(idList).res && (0, _validation.personelInfoValidation)(result).res) {
        result.forEach( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
            var people;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _irregularServices["default"].peopleAdd(item);

                  case 2:
                    people = _context.sent;

                    if (people) {
                      _context.next = 6;
                      break;
                    }

                    util.setError(200, 'people not found');
                    return _context.abrupt("return", util.send(res));

                  case 6:
                    if (!people) {
                      _context.next = 9;
                      break;
                    }

                    util.setSuccess(200, 'people all save');
                    return _context.abrupt("return", util.send(res));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    } catch (error) {
      util.setError(400, error);
      util.send(res);
    }
  });
}
//# sourceMappingURL=irregularController.js.map