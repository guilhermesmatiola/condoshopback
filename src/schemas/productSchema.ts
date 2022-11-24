import joi from "joi";

const productSchema = joi.object({
    name      :  joi.string().required(),
    description : joi.string().required(),
    image      :  joi.string().required(),
    price      :  joi.number().required()
});

export default productSchema;