import shop from "@/api/shop";

// can be complex methods but can never touch state
const actions = {
  fetchProducts({ commit }) {
    return new Promise(resolve => {
      // responsible for making the ajax calls
      // call a mutation method here
      shop.getProducts().then(products => {
        commit("setProducts", products);
        resolve();
      });
    })
  },
  addProductToCart({ state, getters, commit }, product) {
    if (!getters.isProductInStock(product)) {
      return;
    }
    const cartItem = state.cart.find(item => item.id === product.id);
    if (!cartItem) {
      commit('pushProductToCart', product.id);
    } else {
      commit('incrementProductQuantity', cartItem)
    }
    commit('decrementProductInventory', product);
  }
};

export default actions;