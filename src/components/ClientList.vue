<template>
  <div class="bg-gray-800 px-5 py-6 text-white rounded min-w-[1358px]">
    <input
      class="my-5 ml-5 p-2 rounded text-black h-14 w-1/3"
      v-model="search"
      placeholder="Search by name"
    />
    <div class="border-2 border-slate-500 border-opacity-40 rounded">
      <table class="w-full">
        <thead>
          <tr class="border-b-[3px] border-b-slate-500 border-opacity-60">
            <th>
              <button
                class="flex items-center justify-between p-5 w-full hover:bg-sky-700 rounded transition ease-in-out delay-30"
                @click="sort('givenName')"
              >
                <span class="mr-2 font-bold">Name</span>
                <SortIcon class="fill-current" />
              </button>
            </th>
            <th>
              <button
                class="flex items-center justify-between p-5 w-full hover:bg-sky-700 rounded transition ease-in-out delay-30"
                @click="sort('email')"
              >
                <span class="mr-2 font-bold">Email</span>
                <SortIcon class="fill-current" />
              </button>
            </th>
            <th>
              <button
                class="flex items-center justify-between p-5 w-full hover:bg-sky-700 rounded transition ease-in-out delay-30"
                @click="sort('docType')"
              >
                <span class="mr-2 font-bold">Document Type</span>
                <SortIcon class="fill-current" />
              </button>
            </th>
            <th>
              <button
                class="flex items-center justify-between p-5 w-full hover:bg-sky-700 rounded transition ease-in-out delay-30"
                @click="sort('docNum')"
              >
                <span class="mr-2 font-bold">Document Number</span>
                <SortIcon class="fill-current" />
              </button>
            </th>
            <th>
              <button
                class="flex items-center justify-between p-5 w-full hover:bg-sky-700 rounded transition ease-in-out delay-30"
                @click="sort('customerId')"
              >
                <span class="mr-2 font-bold">Customer ID</span>
                <SortIcon class="fill-current" />
              </button>
            </th>
            <th class="font-bold">Phone</th>
            <th class="font-bold">Products</th>
          </tr>
        </thead>
        <tbody v-if="filteredClients.length > 0">
          <tr
            v-for="(client, index) in filteredClients"
            :key="client.id"
            @click="selectClient(client.id)"
            :class="[
              'border-b-slate-600 border-opacity-50 overflow-scroll cursor-pointer hover:bg-blue-900 transition ease-in-out delay-30 text-slate-200',
              { 'border-b-2': index !== filteredClients.length - 1 }
            ]"
          >
            <td class="p-5 min-w-[200px]">{{ client.givenName }} {{ client.familyName1 }}</td>
            <td class="p-5 min-w-[225px]">{{ client.email }}</td>
            <td class="p-5 min-w-[180px]">{{ client.docType }}</td>
            <td class="p-5 min-w-[200px]">{{ client.docNum }}</td>
            <td class="p-5 min-w-[120px]">{{ client.customerId }}</td>
            <td class="p-5 min-w-[120px] max-w-[120px]">{{ client.phone }}</td>
            <td class="p-5 min-w-[120px] max-w-[225px]">
              <ul>
                <li v-for="product in client.products" :key="product._id">
                  {{ product.productName }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="7" class="text-center py-5">No users found with the specified name</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import SortIcon from '@/components/SortIcon.vue'
import { Product, Client } from '@/types'

const apiUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost:3000'

const clients = ref<Client[]>([])
const products = ref<Product[]>([])
const search = ref('')
const sortKey = ref('')
const sortAsc = ref(true)
const router = useRouter()

const fetchClients = async () => {
  try {
    const [clientsResponse, productsResponse] = await Promise.all([
      axios.get(`${apiUrl}/clients`),
      axios.get(`${apiUrl}/products`)
    ])
    clients.value = clientsResponse.data
    products.value = productsResponse.data
  } catch (error) {
    console.error(error)
  }
}

const sort = (key: string) => {
  if (sortKey.value === key) {
    sortAsc.value = !sortAsc.value
  } else {
    sortKey.value = key
    sortAsc.value = true
  }
}

const filteredClients = computed(() => {
  let result = clients.value
    .map((client) => {
      client.products = products.value.filter((product) => product.customerId === client.customerId)
      return client
    })
    .filter((client) => client.givenName.toLowerCase().includes(search.value.toLowerCase()))

  if (sortKey.value) {
    result = result.sort((a, b) => {
      const aValue = a[sortKey.value as keyof Client]
      const bValue = b[sortKey.value as keyof Client]
      if (aValue < bValue) return sortAsc.value ? -1 : 1
      if (aValue > bValue) return sortAsc.value ? 1 : -1
      return 0
    })
  }
  return result
})

const selectClient = (clientId: string) => {
  router.push({ name: 'ClientDetail', params: { id: clientId } })
}

onMounted(fetchClients)
</script>

<style scoped>
button:hover .fill-current {
  color: white;
}
</style>
