import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  products: []
};

const getters = {
  productsCount() {
    return state.products.length;
  }
};

// can be complex methods but can never touch state
const actions = {
  fetchProducts() {
    // responsible for making the ajax calls
    // call a mutation method here
  }
};

// must be simple methods that update the state
const mutations = {
  setProducts(state, products) {
    // responsible for setting/updating the state
    state.products = products;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
