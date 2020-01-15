import shop from "@/api/shop";

export default {
  namespaced: true,
  state: {
    products: []
  },
  getters: {
    productsCount(state) {
      return state.products.length;
    },
    products(state) {
      return state.products;
    },
    availableProducts(state) {
      return state.products.filter(prod => prod.inventory > 0);
    },
    isProductInStock() {
      return function(product) {
        return product.inventory > 0;
      };
    }
  },
  // can be complex methods but can never touch state
  actions: {
    fetchProducts({ commit }) {
      return new Promise(resolve => {
        // responsible for making the ajax calls
        // call a mutation method here
        shop.getProducts().then(products => {
          commit("setProducts", products);
          resolve();
        });
      });
    }
  },
  mutations: {
    setProducts(state, products) {
      // responsible for setting/updating the state
      state.products = products;
    },
    decrementProductInventory(state, product) {
      product.inventory--;
    }
  }
};
