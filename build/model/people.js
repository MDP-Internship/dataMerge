"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var newsSchema = (0, _mongoose.Schema)({
  id: {
    type: String
  },
  mail: {
    type: String
  },
  adress: {
    type: String
  },
  name: {
    type: String
  },
  username: {
    type: String
  }
});

var _default = (0, _mongoose.model)("People", newsSchema);

exports["default"] = _default;
//# sourceMappingURL=people.js.map