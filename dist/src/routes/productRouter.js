"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var productController_1 = require("../controllers/productController");
var validateTokenMiddleware_1 = __importDefault(require("../middlewares/validateTokenMiddleware"));
var validateSchemaMiddleware_1 = __importDefault(require("../middlewares/validateSchemaMiddleware"));
var productSchema_1 = __importDefault(require("../schemas/productSchema"));
var productRouter = (0, express_1.Router)();
productRouter.get('/products', validateTokenMiddleware_1["default"], productController_1.getAll);
productRouter.post('/products', (0, validateSchemaMiddleware_1["default"])(productSchema_1["default"]), validateTokenMiddleware_1["default"], productController_1.newProduct);
exports["default"] = productRouter;
