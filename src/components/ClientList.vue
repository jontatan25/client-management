<template>
  <div class="bg-gray-800 p-5 text-white rounded">
    <h2 class="py-5 text-center">CLIENT LIST</h2>
    <input class="mb-5 p-2 rounded text-black" v-model="search" placeholder="Search by name" />
    <table class="w-full">
      <thead>
        <tr class="border-b">
          <th class="pb-2">
            <button @click="sort('givenName')">Name</button>
          </th>
          <th class="pb-2">
            <button @click="sort('email')">Email</button>
          </th>
          <th class="pb-2">
            <button @click="sort('docType')">Document Type</button>
          </th>
          <th class="pb-2">
            <button @click="sort('docNum')">Document Number</button>
          </th>
          <th class="pb-2">
            <button @click="sort('customerId')">Customer ID</button>
          </th>
          <th class="pb-2">
            <button @click="sort('phone')">Phone</button>
          </th>
          <th class="pb-2">Products</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="client in filteredClients"
          :key="client._id"
          @click="selectClient(client.id)"
          class="border-b border-gray-400 overflow-scroll cursor-pointer hover:bg-blue-900"
        >
          <td class="p-5 max-w-[120px]">{{ client.givenName }} {{ client.familyName1 }}</td>
          <td class="p-5 max-w-[225px]">{{ client.email }}</td>
          <td class="p-5 max-w-[120px]">{{ client.docType }}</td>
          <td class="p-5 max-w-[120px]">{{ client.docNum }}</td>
          <td class="p-5 max-w-[120px]">{{ client.customerId }}</td>
          <td class="p-5 max-w-[120px]">{{ client.phone }}</td>
          <td class="p-5 max-w-[225px]">
            <ul>
              <li v-for="product in client.products" :key="product._id">
                {{ product.productName }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
const apiUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost:3000'

export default {
  data() {
    return {
      clients: [],
      products: [],
      search: '',
      sortKey: '',
      sortAsc: true
    }
  },
  computed: {
    filteredClients() {
      let result = this.clients
        .map((client) => {
          client.products = this.products.filter(
            (product) => product.customerId === client.customerId
          )
          return client
        })
        .filter((client) => client.givenName.toLowerCase().includes(this.search.toLowerCase()))
      if (this.sortKey) {
        result = result.sort((a, b) => {
          const aValue = a[this.sortKey]
          const bValue = b[this.sortKey]
          if (aValue < bValue) return this.sortAsc ? -1 : 1
          if (aValue > bValue) return this.sortAsc ? 1 : -1
          return 0
        })
      }
      return result
    }
  },
  methods: {
    async fetchClients() {
      try {
        const [clientsResponse, productsResponse] = await Promise.all([
          axios.get(`${apiUrl}/clients`),
          axios.get(`${apiUrl}/products`)
        ])
        this.clients = clientsResponse.data
        this.products = productsResponse.data
      } catch (error) {
        console.error(error)
      }
    },
    sort(key) {
      this.sortKey = key
      this.sortAsc = !this.sortAsc
    },
    selectClient(clientId) {
      this.$router.push({ name: 'ClientDetail', params: { id: clientId } })
    }
  },
  created() {
    this.fetchClients()
  }
}
</script>
