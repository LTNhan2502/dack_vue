<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in orderByPrice" :key="product.id">
        <div class="card product-card">
          <img :src="product.image" class="card-img-top" alt="Product Image" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price.toFixed(3) }}VND</p>
            <router-link :to="`/detail-product/${product.id}`" class="stretched-link"></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <!-- pagination -->
        <Paginate></Paginate>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Paginate from "./Paginate.vue"

export default {
  name: 'ProductPage',
  components:{
    Paginate
  },
  computed:{
    ...mapGetters(['orderByPrice'])
  }
}
</script>

<style>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.card-body {
  text-align: center;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #6c757d;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #e0e0e0;
}

.paginate-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  color: #6c757d;
  margin: 0 5px;
}

.paginate-buttons:hover {
  background-color: #e9ecef;
}

.active-page {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}
</style>
