"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.personelInfoValidation = personelInfoValidation;
exports.isPersoneId = isPersoneId;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function validateError(error) {
  error.forEach(function (err) {
    var errCode = err.code;
    console.log(err);
  });
}

function personelInfoValidation(object) {
  var personelObject = _joi["default"].object({
    id: _joi["default"].number().required(),
    name: _joi["default"].string().required().min(3),
    username: _joi["default"].string().required().min(3),
    mail: _joi["default"].string().email().required(),
    adress: _joi["default"].string().required().min(3)
  });

  var schema = _joi["default"].array().items(personelObject);

  var result = schema.validate(object, {
    abortEarly: false
  });

  if (result.error) {
    return {
      res: false,
      err: {
        // eslint-disable-next-line no-underscore-dangle
        message: result.error.message,
        value: result.error.details[0].context.value
      }
    };
  }

  return {
    res: true
  };
}

function isPersoneId(personelId) {
  var idArray = _joi["default"].array().items(_joi["default"].number().required());

  var result = idArray.validate(personelId, {
    abortEarly: false
  });

  if (result.error) {
    var value = result.error.details[0].context.value;
    var key = result.error.details[0].context.key;
    return {
      res: false,
      err: "id should be in string not number => value: \"".concat(value, "\" key: \"").concat(key, "\"")
    };
  }

  return {
    res: true
  };
}
//# sourceMappingURL=validation.js.map