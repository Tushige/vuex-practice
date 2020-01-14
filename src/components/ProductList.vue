<template>
  <div>
    <h1>Product List</h1>
    <img v-if="isLoading" src="https://i.imgur.com/JfPpwOA.gif"/>
    <ul v-else>
      <li
        v-for="product in products"
        :key="product.id"
        >
        {{ product.title }} - {{ product.price | currency }} -- {{product.inventory}}
        <button 
          @click="addProductToCart(product)"
          :disabled="!isProductInStock(product)"
          >Add To Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isLoading: true
    };
  },
  methods: {
    ...mapActions({
      fetchProducts: "fetchProducts",
      addProductToCart: "addProductToCart"
    })
  },
  computed: {
    ...mapState({
      products: state => state.products.products
    }),
    ...mapGetters({
      isProductInStock: "isProductInStock"
    })
  },
  created() {
    this.fetchProducts().then(() => (this.isLoading = false));
  }
};
</script>

<style></style>
