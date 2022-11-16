import joi from "joi";

const userSignUpSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  image: joi.string().required(),
  password: joi.string().required(),
  city: joi.string().required()
});

export default userSignUpSchema;