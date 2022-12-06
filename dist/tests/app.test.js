"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var faker_1 = require("@faker-js/faker");
var bcrypt_1 = __importDefault(require("bcrypt"));
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("./../src/app"));
var database_1 = __importDefault(require("./../src/config/database"));
beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1["default"].user.deleteMany()];
            case 1:
                _a.sent(); // remove all previous users
                return [2 /*return*/];
        }
    });
}); });
var APP = (0, supertest_1["default"])(app_1["default"]);
describe('user tests suite', function () {
    it('creates a user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = __createUserInfo();
                    return [4 /*yield*/, APP.post('/signup').send(user)];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it('login valid user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userInfo, user, response, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userInfo = __createUserInfo();
                    return [4 /*yield*/, __createUser(userInfo)];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, APP.post('/signin').send({
                            email: user.email,
                            password: userInfo.password
                        })];
                case 2:
                    response = _a.sent();
                    token = response.body;
                    expect(token).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
function __createUserInfo() {
    return {
        name: faker_1.faker.name.findName(),
        email: faker_1.faker.internet.email(),
        image: faker_1.faker.internet.url(),
        password: faker_1.faker.internet.password(),
        city: ['Torre 1', 'Torre 2'][Math.floor(Math.random() * (2 - 0 + 1))]
    };
}
function __createUser(userInfo) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].user.create({
                        data: __assign(__assign({}, userInfo), { password: bcrypt_1["default"].hashSync(userInfo.password, 10) })
                    })];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, user];
            }
        });
    });
}
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1["default"].$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
