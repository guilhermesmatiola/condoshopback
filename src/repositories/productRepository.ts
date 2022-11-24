import prisma from './../config/database';
import { Products } from '@prisma/client';

export type TProducts = Omit<Products, "id">

export async function findAll() {
  return await prisma.products.findMany();
}

export async function insert(data:TProducts) {
  await prisma.products.create({data});  
}