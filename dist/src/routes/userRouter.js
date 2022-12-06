"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var validateSchemaMiddleware_1 = __importDefault(require("../middlewares/validateSchemaMiddleware"));
var userSignInSchema_1 = __importDefault(require("../schemas/userSignInSchema"));
var userSignUpSchema_1 = __importDefault(require("../schemas/userSignUpSchema"));
var userRouter = (0, express_1.Router)();
userRouter.post('/signup', (0, validateSchemaMiddleware_1["default"])(userSignUpSchema_1["default"]), userController_1.signUp);
userRouter.post('/signin', (0, validateSchemaMiddleware_1["default"])(userSignInSchema_1["default"]), userController_1.signIn);
exports["default"] = userRouter;
