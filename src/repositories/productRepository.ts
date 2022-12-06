import prisma from './../config/database';
import { Product } from '@prisma/client';

export type TProducts = Omit<Product, "id">

export async function findAll() {
  return await prisma.product.findMany();
}

export async function insert(data:TProducts) {
  await prisma.product.create({data});  
}