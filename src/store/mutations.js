// must be simple methods that update the state
const mutations = {
  setProducts(state, products) {
    // responsible for setting/updating the state
    state.products = products;
  },
  pushProductToCart(state, productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    });
  },
  decrementProductInventory(state, product) {
    product.inventory--;
  }
};

export default mutations