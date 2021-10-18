"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var process_textfile_1 = __importDefault(require("../../src/utilities/process_textfile"));
// import checkJSONValidity from '../../src/utilities/process_textfile';
describe('test suite for function process textfile', function () {
    it('should return specific result when called', function () { return __awaiter(void 0, void 0, void 0, function () {
        var compareTo, result_received;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    compareTo = { ext: 1, pdf: 1 };
                    return [4 /*yield*/, (0, process_textfile_1.default)('data.txt')];
                case 1:
                    result_received = _a.sent();
                    expect(result_received).toEqual(compareTo);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not return any response when the filename is not specified', function () { return __awaiter(void 0, void 0, void 0, function () {
        var compareTo, result_received;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    compareTo = {};
                    return [4 /*yield*/, (0, process_textfile_1.default)('test2_data.txt')];
                case 1:
                    result_received = _a.sent();
                    expect(result_received).toEqual(compareTo);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not return any response when the extension is not specified', function () { return __awaiter(void 0, void 0, void 0, function () {
        var compareTo, result_received;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    compareTo = {};
                    return [4 /*yield*/, (0, process_textfile_1.default)('test3_data.txt')];
                case 1:
                    result_received = _a.sent();
                    expect(result_received).toEqual(compareTo);
                    return [2 /*return*/];
            }
        });
    }); });
});
// describe('test suite for function to check if the json is valid or not', () => {
//   it('should  return true when the json is invalid', () => {
//     const dataJSON: string =
//       '{"ts":1551140352,"pt":55,"si":"3380fb19-0bdb-46ab-8781-e4c5cd448074","uu":"0dd24034-36d6-4b1e-a6c1-a52cc984f105","bg":"77e28e28-745a-474b-a496-3c0e086eaec0","sha":"abb3ec1b8174043d5cd21d21fbe3c3fb3e9a11c7ceff3314a3222404feedda52","nm":"index.ts","ph":"/efvrfutgp/expgh/phkkrw","dp":2}';
//     checkJSONValidity(dataJSON, function (result_received: any) {
//       expect(result_received).toEqual(true);
//     });
//   });
// });
