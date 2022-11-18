import { Router } from "express";
import { getAll, values } from "../controllers/valuesController";

const recommendationRouter = Router();

recommendationRouter.get("/values",getAll);
recommendationRouter.post("/values", values);


export default recommendationRouter;
