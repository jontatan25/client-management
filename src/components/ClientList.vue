<template>
  <div class="bg-gray-800 p-5 text-white rounded w-[390px]">
    <h2 class="py-5 text-center">CLIENT LIST</h2>
    <input class="mb-5 p-2 rounded text-black" v-model="search" placeholder="Search by name" />
    <table>
      <thead>
        <tr class="border-b">
          <th class="pb-2">
            <button @click="sort('name')" >Name</button>
          </th>
          <th class="pb-2">
            <button @click="sort('email')">Email</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="client in filteredClients"
          :key="client.id"
          @click="selectClient(client.id)"
          class="border-b border-gray-400 overflow-scroll cursor-pointer hover:bg-blue-900 "
        >
          <td class="p-5 max-w-[120px]">{{ client.name }}</td>
          <td class="p-5 max-w-[225px]">{{ client.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      clients: [],
      search: '',
      sortKey: '',
      sortAsc: true
    }
  },
  computed: {
    filteredClients() {
      let result = this.clients.filter((client) =>
        client.name.toLowerCase().includes(this.search.toLowerCase())
      )
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
        const response = await axios.get('http://localhost:3000/clients')
        this.clients = response.data
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
