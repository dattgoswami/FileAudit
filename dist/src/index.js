"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 3000;
//we want our endpoint api to use routes as a middleware
app.use('/api', index_1.default);
app.listen(port, function () {
    console.log("server started http://localhost:" + port);
    console.log('check 1. http://localhost:3000/api/');
    console.log('2. http://localhost:3000/api/extensions');
    console.log('3. http://localhost:3000/api/extensions/json');
});
exports.default = app;
