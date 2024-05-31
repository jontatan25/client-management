<template>
  <div class="bg-gray-800 text-white p-8 rounded w-full">
    <div>
      <h2 class="text-center text-2xl mb-5">Client Detail</h2>
      <div v-if="client" class="p-5">
        <p class="mb-2"><strong>Name:</strong> {{ client.givenName }} {{ client.familyName1 }}</p>
        <p class="mb-2"><strong>Document Type:</strong> {{ client.docType }}</p>
        <p class="mb-2"><strong>Document Number:</strong> {{ client.docNum }}</p>
        <p class="mb-2"><strong>Email:</strong> {{ client.email }}</p>
        <p class="mb-2"><strong>Customer ID:</strong> {{ client.customerId }}</p>
        <p class="mb-2"><strong>Phone:</strong> {{ client.phone }}</p>
      </div>
    </div>
    <div>
      <h3 class="text-xl mt-5 ml-5">Products</h3>
      <ProductList :products="products" class="p-5"/>
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
