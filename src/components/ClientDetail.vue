<template>
  <div class="bg-gray-800 text-white py-8 px-20 rounded w-[800px] flex justify-between">
    <div>
      <h2 class="text-2xl mb-5 lato-bold">Client Detail</h2>
      <div class="border-2 border-slate-500 border-opacity-40 mb-5 rounded">
        <div v-if="client" class="p-5">
          <div
            class="py-1 flex justify-between border-b-2 border-slate-500 border-opacity-40 text-slate-200"
          >
            <strong>Name:</strong>
            <p class="mb-2">{{ client.givenName }} {{ client.familyName1 }}</p>
          </div>
          <div
            class="py-1 flex justify-between border-b-2 border-slate-500 border-opacity-40 text-slate-200"
          >
            <strong>Document Type:</strong>
            <p class="mb-2">{{ client.docType }}</p>
          </div>
          <div
            class="py-1 flex justify-between border-b-2 border-slate-500 border-opacity-40 text-slate-200"
          >
            <strong>Document Number:</strong>
            <p class="mb-2">{{ client.docNum }}</p>
          </div>
          <div
            class="py-1 flex justify-between border-b-2 border-slate-500 border-opacity-40 text-slate-200"
          >
            <strong>Email:</strong>
            <p class="mb-2">{{ client.email }}</p>
          </div>
          <div
            class="py-1 flex justify-between border-b-2 border-slate-500 border-opacity-40 text-slate-200"
          >
            <strong>Customer ID:</strong>
            <p class="mb-2">{{ client.customerId }}</p>
          </div>
          <div
            class="py-1 flex justify-between border-b-2 border-slate-500 border-opacity-40 text-slate-200"
          >
            <strong>Phone:</strong>
            <p class="mb-2">{{ client.phone }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-2xl mb-5 lato-bold">Products</h3>
      <template v-if="products.length > 0">
        <ProductList :products="products"/>
      </template>
      <template v-else>
        <p class="p-5">No products found for this client.</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import ProductList from '@/components/ProductList.vue'
import { Product, Client } from '@/types'

const apiUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost:3000'

const client = ref<Client | null>(null)
const products = ref<Product[]>([])

const route = useRoute()

const fetchClient = async () => {
  try {
    const response = await axios.get(`${apiUrl}/clients/${route.params.id}`)
    client.value = response.data
    const productsResponse = await axios.get(
      `${apiUrl}/products?customerId=${client.value.customerId}`
    )
    products.value = productsResponse.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchClient)
</script>
