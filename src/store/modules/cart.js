import shop from '@/api/shop'



export default {
  state: {
    cart: [],
    checkoutStatus: ''
  },
  getters: {
    cartProducts(state, getters, rootState) {
      return state.cart.map(cartItem => {
        return rootState.products.products.find(prod => prod.id === cartItem.id)
      })
    },
    totalPrice(state, getters, rootState) {
      return state.cart.reduce((prev, curr) => {
        const p = rootState.products.products.find(prod => prod.id === curr.id);
        return prev + p.price * curr.quantity;
      }, 0);
    }
  },
  actions: {
    checkout({ commit }) {
      shop.buyProducts().then(() => {
        commit('emptycart');
        commit('setCheckoutStatus', 'success');
      }).catch(() => {
        commit('setCheckoutStatus', 'fail');
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
  },
  mutations: {
    emptycart(state) {
      state.cart = []
    },
    incrementProductQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      });
    }
  }
}
