import * as valuesRepository from '../repositories/valuesRepository';

async function findAll() {
  const products = await valuesRepository.findAll();
  return products;
}

export async function newValues
(data: {
  value1 :  string;
  value2 :  number;
  
})
  {
    
    await valuesRepository.insert({

          value1 :  data.value1,
          value2 :  data.value2	});

  }

const valuesService = {
    findAll,
    newValues,
  };
  
  export default valuesService;