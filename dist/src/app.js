"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importStar(require("express"));
require("express-async-errors");
var errorHandlerMiddleware_1 = require("./middlewares/errorHandlerMiddleware");
var e2eRouter_1 = __importDefault(require("./routes/e2eRouter"));
var productRouter_1 = __importDefault(require("./routes/productRouter"));
var userRouter_1 = __importDefault(require("./routes/userRouter"));
var recommendationsRouter_1 = __importDefault(require("./routes/recommendationsRouter"));
var valuesRouter_1 = __importDefault(require("./routes/valuesRouter"));
var EPCRouter_1 = __importDefault(require("./routes/EPCRouter"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use((0, express_1.json)());
app.use(userRouter_1["default"]);
if (process.env.NODE_ENV === 'test') {
    app.use(e2eRouter_1["default"]);
}
app.use(productRouter_1["default"]);
app.use(recommendationsRouter_1["default"]);
app.use(valuesRouter_1["default"]);
app.use(EPCRouter_1["default"]);
app.use(errorHandlerMiddleware_1.handleErrorsMiddleware);
exports["default"] = app;
