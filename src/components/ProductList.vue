<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product._id" class="mb-2">
        <p><strong>Product Name:</strong> {{ product.productName }}</p>
        <p><strong>Product Type:</strong> {{ product.productTypeName }}</p>
        <p v-if="product.mbSpeed"><strong>MB Speed:</strong> {{ product.mbSpeed }}</p>
        <p v-if="product.gbData"><strong>GB Data:</strong> {{ product.gbData }}</p>
        <p><strong>Terminal Number:</strong> {{ product.numeracioTerminal }}</p>
        <p><strong>Sold At:</strong> {{ product.soldAt }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>