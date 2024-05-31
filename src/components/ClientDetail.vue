<template>
  <div>
    <h2>Client Detail</h2>
    <div v-if="client">
      <p>Name: {{ client.name }}</p>
      <p>docType: {{ client.docType }}</p>
      <p>docNum: {{ client.docNum }}</p>
      <p>Email: {{ client.email }}</p>
      <h3>Products</h3>
      <ProductList :products="client.products" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductList from './ProductList.vue';
const apiUrl = import.meta.env.VITE_APP_API_URL || "http://localhost:3000";

export default {
  data() {
    return {
      client: null,
    };
  },
  methods: {
    async fetchClient() {
      try {
        const response = await axios.get(`${apiUrl}/clients/${this.$route.params.id}`);
        this.client = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchClient();
  },
  components: {
    ProductList,
  },
};
</script>
