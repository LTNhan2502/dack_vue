<template>
    <div class="col mb-4" v-for="product in orderByPrice" :key="product.id">
        <div class="card">
            <img :src="product.image" class="card-img-top" alt="..." />
            <div class="card-body">
                    <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">
                  {{product.price.toFixed(2)}}  $
                    <br />
                    <small>  </small>
                </p>
                <router-link :to="`/detail-product/${product.id}`">
                <button
                    class="btn btn-primary btn-block" 
                >
          Detail{{getPages }}
                </button>
            </router-link> 
            </div>
        </div>
    </div>
    <div class="col-12">
    <!-- pagination -->
    <!-- pagination -->
    <paginate></paginate>

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
  data() {
        return {
           
        };
    },
    computed:{
            ...mapGetters(['find','orderByPrice'])
    },
    methods:{
     
    }
}
</script>

<style>
 .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>
