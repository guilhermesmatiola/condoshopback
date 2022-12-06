"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.recommendationSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.recommendationSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    description: joi_1["default"].string().required(),
    image: joi_1["default"].string().uri().required(),
    price: joi_1["default"].number().required()
});
