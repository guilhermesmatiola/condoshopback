"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var productSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    description: joi_1["default"].string().required(),
    image: joi_1["default"].string().required(),
    price: joi_1["default"].number().required()
});
exports["default"] = productSchema;
