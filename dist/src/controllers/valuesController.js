"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.__esModule = true;
exports.values = void 0;
var database_1 = __importDefault(require("../config/database"));
function values(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        function getAll() {
            return __awaiter(this, void 0, void 0, function () {
                var RIFDReturn, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, database_1["default"].$queryRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["select distinct(products.name) from products\n      join \"Values\" on products.id = \"Values\".value2\n      where \"Values\".value1 = ", ""], ["select distinct(products.name) from products\n      join \"Values\" on products.id = \"Values\".value2\n      where \"Values\".value1 = ", ""])), value1.toUpperCase())];
                        case 1:
                            RIFDReturn = _a.sent();
                            return [2 /*return*/, (RIFDReturn)];
                        case 2:
                            error_2 = _a.sent();
                            return [2 /*return*/, res.status(500).send(value1)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        var _a, value1, value2, retorno, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, value1 = _a.value1, value2 = _a.value2;
                    console.log(value1);
                    if (value1 == "ABCD01234EF45000011112222" || "abcd01234ef45000011112222") {
                        value2 = 1;
                    }
                    if (value1 == "ABCD01234EF45000011112223" || "abcd01234ef45000011112223") {
                        value2 = 2;
                    }
                    if (value1 == "ABCD01234EF45000011112224" || "abcd01234ef45000011112224") {
                        value2 = 3;
                    }
                    if (value1 == "ABCD01234EF45000011112225" || "abcd01234ef45000011112225") {
                        value2 = 4;
                    }
                    if (value1 == "ABCD01234EF45000011112226" || "abcd01234ef45000011112226") {
                        value2 = 5;
                    }
                    if (value1 == "ABCD01234EF45000011112227" || "abcd01234ef45000011112227") {
                        value2 = 6;
                    }
                    if (value1 == "ABCD01234EF45000011112228" || "abcd01234ef45000011112228") {
                        value2 = 7;
                    }
                    if (value1 == "ABCD01234EF45000011112229" || "abcd01234ef45000011112229") {
                        value2 = 8;
                    }
                    if (value1 == "ABCD01234EF45000011112230" || "abcd01234ef45000011112230") {
                        value2 = 9;
                    }
                    if (value1 == "ABCD01234EF45000011112231" || "abcd01234ef45000011112231") {
                        value2 = 10;
                    }
                    if (value1 == "ABCD01234EF45000011112232" || "abcd01234ef45000011112232") {
                        value2 = 11;
                    }
                    if (value1 == "ABCD01234EF45000011112233" || "abcd01234ef45000011112233") {
                        value2 = 12;
                    }
                    if (value1 == "ABCD01234EF45000011112234" || "abcd01234ef45000011112234") {
                        value2 = 13;
                    }
                    if (value1 == "ABCD01234EF45000011112235" || "abcd01234ef45000011112235") {
                        value2 = 14;
                    }
                    if (value1 == "ABCD01234EF45000011112236" || "abcd01234ef45000011112236") {
                        value2 = 15;
                    }
                    if (value1 == "ABCD01234EF45000011112237" || "abcd01234ef45000011112237") {
                        value2 = 16;
                    }
                    if (value1 == "ABCD01234EF45000011112238" || "abcd01234ef45000011112238") {
                        value2 = 17;
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, database_1["default"].$queryRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["INSERT into \"Values\" (value1, value2) values (", ", ", ");"], ["INSERT into \"Values\" (value1, value2) values (", ", ", ");"])), value1, value2)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, getAll()];
                case 3:
                    retorno = _b.sent();
                    return [2 /*return*/, res.status(201).send(retorno)];
                case 4:
                    error_1 = _b.sent();
                    return [2 /*return*/, res.status(500).send(error_1)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.values = values;
var templateObject_1, templateObject_2;
