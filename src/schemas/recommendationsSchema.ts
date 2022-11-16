import joi from "joi";
import { CreateRecommendationData } from "../services/recommendationsService.js";


export const recommendationSchema = joi.object<CreateRecommendationData>({
	name: joi.string().required(),
    description: joi.string().required(),
    image:       joi.string().uri().required(),
    price :      joi.number().required(),
});
