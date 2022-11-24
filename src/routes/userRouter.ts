import { Router } from 'express';
import { signIn, signUp } from '../controllers/userController';
import validateSchema from '../middlewares/validateSchemaMiddleware';
import userSignInSchema from '../schemas/userSignInSchema';
import userSignUpSchema from '../schemas/userSignUpSchema';

const userRouter = Router();

userRouter.post('/signup', validateSchema(userSignUpSchema), signUp);
userRouter.post('/signin', validateSchema(userSignInSchema), signIn);

export default userRouter;
