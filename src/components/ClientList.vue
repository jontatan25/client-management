<template>
  <div>
    <h2>Client List</h2>
    <input v-model="search" placeholder="Search by name" />
    <table>
      <thead>
        <tr>
          <th @click="sort('name')">Name</th>
          <th @click="sort('email')">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in filteredClients" :key="client.id" @click="selectClient(client.id)">
          <td>{{ client.name }}</td>
          <td>{{ client.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clients: [],
      search: '',
      sortKey: '',
      sortAsc: true,
    };
  },
  computed: {
    filteredClients() {
      let result = this.clients.filter(client =>
        client.name.toLowerCase().includes(this.search.toLowerCase())
      );
      if (this.sortKey) {
        result = result.sort((a, b) => {
          const aValue = a[this.sortKey];
          const bValue = b[this.sortKey];
          if (aValue < bValue) return this.sortAsc ? -1 : 1;
          if (aValue > bValue) return this.sortAsc ? 1 : -1;
          return 0;
        });
      }
      return result;
    },
  },
  methods: {
    async fetchClients() {
      try {
        const response = await axios.get('http://localhost:3000/clients');
        this.clients = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    sort(key) {
      this.sortKey = key;
      this.sortAsc = !this.sortAsc;
    },
    selectClient(clientId) {
      this.$router.push({ name: 'ClientDetail', params: { id: clientId } });
    },
  },
  created() {
    this.fetchClients();
  },
};
</script>
