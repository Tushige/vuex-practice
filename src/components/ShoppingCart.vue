<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }}
      </li>
    </ul>
    <div>
      Total: {{ totalPrice | currency }}
      <button @click="checkout">Checkout</button>
      <div>checkout: {{ checkoutStatus }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "cart/cartProducts",
      totalPrice: "cart/totalPrice"
    }),
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    })
  },
  methods: {
    ...mapActions({
      checkout: "cart/checkout"
    })
  }
};
</script>

<style></style>
