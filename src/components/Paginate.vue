<template>
  <div v-if="getPages!=1">
    <button    type="button" class="btn btn-info" v-for="i in getPages"  :key="i" @click="changePage(i)">{{i}}</button>
  </div>
</template>

<script>
import { mapGetters,mapMutations} from 'vuex';
export default {
    name: 'PaginateFunction',
    components:{
       
    },
    computed:{
        ...mapGetters(['getPages']),
    },
    methods:{
      ...mapMutations(['changePage','paginate']),
     
  },
  
}
</script>

<style>

</style>