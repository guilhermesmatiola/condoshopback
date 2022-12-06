"use strict";
exports.__esModule = true;
var express_1 = require("express");
var EPCController_1 = require("../controllers/EPCController");
var rfidRouter = (0, express_1.Router)();
rfidRouter.post('/rfidtag', EPCController_1.getProductByCode);
exports["default"] = rfidRouter;
