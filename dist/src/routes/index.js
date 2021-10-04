"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var extensions_1 = __importDefault(require("./api/extensions"));
//routes object that will be applied to endpoint /api
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('endpoint currently available is extensions and extensions/json');
});
routes.use('/extensions', extensions_1.default);
exports.default = routes;
