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
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
// import { Observable } from 'rxjs';
var filenameSet = new Set();
function process_textfile(filename) {
    var resultExtensionCounter = {};
    var extensionCounterMap = new Map();
    //reference https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
    var filePath = '../assets/' + filename;
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(path.join(__dirname, filePath))
    });
    lineReader.on('line', function (line) {
        if (checkJSONValidity(line)) {
            var lineJSON = JSON.parse(line);
            //   filenameSet.add(lineJSON.nm);
            process_line(lineJSON);
        }
    });
    filenameSet.forEach(function (filename) {
        var filenameExtension = filename.split('.');
        if (filenameExtension[0].length != 0 && filenameExtension[1].length != 0) {
            if (!extensionCounterMap.has(filenameExtension[1])) {
                extensionCounterMap.set(filenameExtension[1], 1);
            }
            else {
                var count = extensionCounterMap.get(filenameExtension[1]);
                count++;
                extensionCounterMap.set(filenameExtension[1], count);
            }
        }
    });
    extensionCounterMap.forEach(function (value, key) {
        resultExtensionCounter[key] = value;
    });
    return resultExtensionCounter;
}
function process_line(lineJSON) {
    filenameSet.add(lineJSON.nm);
}
//reference https://www.codegrepper.com/code-examples/javascript/node+js+to+check+if+content+of+file+is+a+valid+json
function checkJSONValidity(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
// module.exports = checkJSONValidity;
exports.default = process_textfile;
