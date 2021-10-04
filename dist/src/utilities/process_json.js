"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function process_json(jsonData) {
    var filenameSet = new Set();
    var extensionCounterMap = new Map();
    var result = {};
    for (var i = 0; i < jsonData.length; i++) {
        filenameSet.add(jsonData[i].nm);
    }
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
        result[key] = value;
    });
    return result;
}
exports.default = process_json;
