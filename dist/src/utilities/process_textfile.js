"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var readline_1 = __importDefault(require("readline"));
// import { Observable } from 'rxjs';
function process_textfile(filename, callback) {
    var filenameSet = new Set();
    var resultExtensionCounter = {};
    var extensionCounterMap = new Map();
    //reference https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
    var filePath = '../assets/' + filename;
    var lineReader = readline_1.default.createInterface({
        input: fs.createReadStream(path.join(__dirname, filePath))
    });
    lineReader.on('line', function (line) {
        if (checkJSONValidity(line)) {
            var lineJSON = JSON.parse(line);
            filenameSet.add(lineJSON.nm);
            // process_line(lineJSON);
        }
    });
    lineReader.on('close', function () {
        filenameSet.forEach(function (filename) {
            var filenameExtension = filename.split('.');
            var fileName = filenameExtension[0];
            var fileExt = filenameExtension[1];
            if (fileExt.length !== 0 && fileName.length !== 0) {
                if (!extensionCounterMap.has(fileExt)) {
                    extensionCounterMap.set(fileExt, 1);
                }
                else {
                    var count = extensionCounterMap.get(fileExt);
                    count++;
                    extensionCounterMap.set(fileExt, count);
                }
            }
        });
        extensionCounterMap.forEach(function (value, key) {
            resultExtensionCounter[key] = value;
        });
        callback(resultExtensionCounter);
    });
}
//reference https://www.codegrepper.com/code-examples/javascript/node+js+to+check+if+content+of+file+is+a+valid+json
function checkJSONValidity(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false;
    }
}
// module.exports = checkJSONValidity;
exports.default = process_textfile;
