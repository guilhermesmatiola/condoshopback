import { Router } from 'express';
import { getAll, newProduct } from '../controllers/productController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';
import productSchema from '../schemas/productSchema';

const productRouter = Router();

productRouter.get('/products', validateToken, getAll);
productRouter.post('/products', validateSchema(productSchema) , validateToken, newProduct);

export default productRouter;
