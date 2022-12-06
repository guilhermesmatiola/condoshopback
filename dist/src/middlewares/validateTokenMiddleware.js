"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1["default"].config({ path: '.env' });
function validateToken(req, res, next) {
    var authorization = req.headers.authorization;
    var token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
    try {
        jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET);
        next();
    }
    catch (error) {
        return res.sendStatus(401);
    }
}
exports["default"] = validateToken;
