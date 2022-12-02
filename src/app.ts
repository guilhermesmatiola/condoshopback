import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import 'express-async-errors';
import { handleErrorsMiddleware } from './middlewares/errorHandlerMiddleware';
import e2eRouter from './routes/e2eRouter';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';
import recommendationsRouter from './routes/recommendationsRouter';
import valuesRouter from './routes/valuesRouter';
import rfidRouter from './routes/rfidPurcRouter'

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(userRouter);

if (process.env.NODE_ENV === 'test') {
  app.use(e2eRouter);
}

app.use(productRouter);
app.use(recommendationsRouter)
app.use(valuesRouter)
app.use(rfidRouter)
app.use(handleErrorsMiddleware);

export default app;
