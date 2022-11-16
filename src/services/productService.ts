import * as productRepository from '../repositories/productRepository';

async function findAll() {
  const products = await productRepository.findAll();
  return products;
}

export async function newProduct(data: {
  name      :  string;
  description : string;
  image      :  string;
  price      :  number;
}) {


	await productRepository.insert({
		name      :  data.name,
    description : data.description,
    image      :  data.image,
    price      :  Number(data.price)
	});

}

const productService = {
  findAll,
  newProduct
};

export default productService;
