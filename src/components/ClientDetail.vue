<template>
  <div class="bg-gray-800 text-white py-8 px-20 rounded w-[800px] flex justify-between">
    <div>
      <h2 class="text-2xl mb-5 lato-bold ">Client Detail</h2>
      <div class="border-2 border-slate-500 border-opacity-40 mb-5">
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
      <ProductList :products="products" class="p-5" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductList from './ProductList.vue'

const apiUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost:3000'

export default {
  data() {
    return {
      client: null,
      products: []
    }
  },
  methods: {
    async fetchClient() {
      try {
        const response = await axios.get(`${apiUrl}/clients/${this.$route.params.id}`)
        this.client = response.data

        const productsResponse = await axios.get(
          `${apiUrl}/products?customerId=${this.client.customerId}`
        )
        this.products = productsResponse.data
      } catch (error) {
        console.error(error)
      }
    }
  },
  created() {
    this.fetchClient()
  },
  components: {
    ProductList
  }
}
</script>
