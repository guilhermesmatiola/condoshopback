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
exports.__esModule = true;
exports.recommendationController = void 0;
var recommendationsSchema_1 = require("../schemas/recommendationsSchema");
var recommendationsService_1 = require("../services/recommendationsService");
var errorUtils_1 = require("../utils/errorUtils");
function insert(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var validation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    validation = recommendationsSchema_1.recommendationSchema.validate(req.body);
                    if (validation.error) {
                        throw (0, errorUtils_1.wrongSchemaError)();
                    }
                    return [4 /*yield*/, recommendationsService_1.recommendationService.insert(req.body)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
function upvote(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, recommendationsService_1.recommendationService.upvote(+id)];
                case 1:
                    _a.sent();
                    res.sendStatus(200);
                    return [2 /*return*/];
            }
        });
    });
}
function downvote(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, recommendationsService_1.recommendationService.downvote(+id)];
                case 1:
                    _a.sent();
                    res.sendStatus(200);
                    return [2 /*return*/];
            }
        });
    });
}
function random(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var randomRecommendation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, recommendationsService_1.recommendationService.getRandom()];
                case 1:
                    randomRecommendation = _a.sent();
                    res.send(randomRecommendation);
                    return [2 /*return*/];
            }
        });
    });
}
function get(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var recommendations;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, recommendationsService_1.recommendationService.get()];
                case 1:
                    recommendations = _a.sent();
                    res.send(recommendations);
                    return [2 /*return*/];
            }
        });
    });
}
function getTop(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var amount, recommendations;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    amount = req.params.amount;
                    return [4 /*yield*/, recommendationsService_1.recommendationService.getTop(+amount)];
                case 1:
                    recommendations = _a.sent();
                    res.send(recommendations);
                    return [2 /*return*/];
            }
        });
    });
}
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, recommendation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, recommendationsService_1.recommendationService.getById(+id)];
                case 1:
                    recommendation = _a.sent();
                    res.send(recommendation);
                    return [2 /*return*/];
            }
        });
    });
}
exports.recommendationController = {
    insert: insert,
    upvote: upvote,
    downvote: downvote,
    random: random,
    getTop: getTop,
    get: get,
    getById: getById
};
