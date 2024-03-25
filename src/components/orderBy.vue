<template>
   <div class="col-12 ">
        <select v-model="textOrder"  @click="orderByPrice(textOrder)"  class="shadow-lg" name="select" id="">
                <option value="Asc">Sắp xếp tăng theo giá</option>
                <option value="Desc">Sắp xếp giảm theo giá </option>
            </select>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data(){
        return{
            textOrder:""
        }
    },
    methods:{
        ...mapMutations(['orderByPrice'])
    }
}
</script>

<style>

</style>