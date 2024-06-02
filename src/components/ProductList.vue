<template>
  <div class="p-5 border-2 border-slate-500 border-opacity-40 rounded">
    <ul>
      <li
        v-for="product in products"
        :key="product._id"
        class="p-5 rounded text-slate-200 border-2 border-cmt-blue not-last-child:mb-3"
      >
        <div
          class="pt-1 pb-2 mb-1 flex justify-between border-b-2 border-slate-500 border-opacity-40"
        >
          <p>
            <span class="text-xl mb-5 lato-bold">{{ product.productName }}</span>
          </p>
        </div>
        <p><strong>Product Type:</strong> {{ product.productTypeName }}</p>
        <p v-if="product.mbSpeed"><strong>MB Speed:</strong> {{ product.mbSpeed }}</p>
        <p v-if="product.gbData"><strong>GB Data:</strong> {{ product.gbData }}</p>
        <p><strong>Terminal Number:</strong> {{ product.numeracioTerminal }}</p>
        <p><strong>Sold At:</strong> {{ product.soldAt }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>
