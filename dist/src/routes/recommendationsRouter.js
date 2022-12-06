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
var express_1 = require("express");
var recommendationsController_1 = require("../controllers/recommendationsController");
var validateTokenMiddleware_1 = __importDefault(require("../middlewares/validateTokenMiddleware"));
var validateSchemaMiddleware_1 = __importDefault(require("../middlewares/validateSchemaMiddleware"));
var recommendationschema = __importStar(require("../schemas/recommendationsSchema"));
var recommendationRouter = (0, express_1.Router)();
recommendationRouter.post("/recommendations", (0, validateSchemaMiddleware_1["default"])(recommendationschema.recommendationSchema), validateTokenMiddleware_1["default"], recommendationsController_1.recommendationController.insert);
recommendationRouter.get("/recommendations", recommendationsController_1.recommendationController.get);
recommendationRouter.get("/random", recommendationsController_1.recommendationController.random);
recommendationRouter.get("/top/:amount", recommendationsController_1.recommendationController.getTop);
recommendationRouter.get("/:id", recommendationsController_1.recommendationController.getById);
recommendationRouter.post("/:id/upvote", recommendationsController_1.recommendationController.upvote);
recommendationRouter.post("/:id/downvote", recommendationsController_1.recommendationController.downvote);
exports["default"] = recommendationRouter;
