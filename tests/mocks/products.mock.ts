import { Product } from '../../src/types/Product';

const validProductToAdd: Product = {
  id: 2,
  name: 'Espada de aço',
  price: '20 moedas',
  userId: 1,
};

const productCreated: Product = {
  id: 2,
  name: 'Espada de aço',
  price: '20 moedas',
  userId: 1,
}

const productsList: Product[] = [
  {
    id: 1,
    name: 'Excalibur',
    price: '10 moedas de ouro',
    userId: 1,
  },
  {
    id: 2,
    name: 'Espada de aço',
    price: '20 moedas de ouro',
    userId: 1,
  },
];

export default {
  validProductToAdd,
  productCreated,
  productsList,
}