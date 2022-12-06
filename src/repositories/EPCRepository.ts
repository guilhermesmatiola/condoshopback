import prisma from '../config/database';
import { EPC } from '@prisma/client';
import { Product } from '@prisma/client';

export type TEPCs = Omit<EPC, "id">

export async function findAll() {
  return await prisma.ePC.findMany();
}

export async function insert(data:TEPCs) {
  await prisma.ePC.create({data});  
}

export async function getByEPC(codigo: string){
  const product:Product = await prisma.$queryRaw`
      SELECT * FROM products
      JOIN epcs ON products.id = epcs.code
      WHERE epcs.code = ${codigo}`;

  return product;
}