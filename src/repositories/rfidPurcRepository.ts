import prisma from './../config/database';
//import {Products} from '@prisma/client';

//export type TProdutcts = Omit<Products, "id">


export async function getDisciplinaByCodigo(codigo: string) {
	return await prisma.$queryRaw`select * from products
    join "Values" on products.id = "Values".value2
    where "Values".value1 = ${codigo}`;
}