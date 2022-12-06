"use strict";
exports.__esModule = true;
var express_1 = require("express");
var valuesController_1 = require("../controllers/valuesController");
var recommendationRouter = (0, express_1.Router)();
//recommendationRouter.get("/values",getAll, values);
recommendationRouter.post("/values", valuesController_1.values);
exports["default"] = recommendationRouter;
