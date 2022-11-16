import { Request, Response } from 'express';

import productService from '../services/productService';

export async function getAll(req: Request, res: Response) {
  const products = await productService.findAll();
  res.status(200).send(products);
}

export async function newProduct(req: Request, res: Response) {
	const data = req.body;

	await productService.newProduct(data);

	res.sendStatus(201);
}