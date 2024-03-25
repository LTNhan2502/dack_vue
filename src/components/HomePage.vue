<template>
    <div class="container">
        <div class="row box-product">
            <orderBy></orderBy>
            <Product></Product>
        </div>
    </div>
</template>

<script>
import orderBy from './orderBy.vue';
import Product from './Product.vue';
export default {
    name: 'HomePage',
  
    components: {
    Product,
    orderBy,
    },
   
  
   
}
</script>

<style>
.box-product {
    margin: 30px 0px;
}
</style>
