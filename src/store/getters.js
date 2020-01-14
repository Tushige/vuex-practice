import state from './state'

const getters = {
  productsCount() {
    return state.products.length;
  },
  products() {
    return state.products;
  },
  availableProducts() {
    return state.products.filter(prod => prod.inventory > 0);
  },
  isProductInStock() {
    return function (product) {
      return product.inventory > 0;
    }
  }
};

export default getters;