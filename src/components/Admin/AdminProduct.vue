<template>
    <div class="row">
        <div class="col-lg-10">
            <h2 class="mt-3 text-start">Product</h2>
        </div>
        <div class="col-lg-2">
            <router-link to="/admin/product/add" class="btn btn-primary mt-3" style="margin-left: -80px;">
                Add anew product
            </router-link>
        </div>        
    </div>
    <div class="row">
        <div class="col-lg-12  mt-2 mb-5">
            <div class="">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Instock</th>
                                <th colspan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="" v-for="item in getProducts" :key="item">
                                <td scope="row">{{ item.id }}</td>
                                <td>{{ item.name }}</td>
                                <td>
                                    <img :src="item.image" alt="" width="60px" height="60px">
                                </td>
                                <td>{{ item.description }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.inStock }}</td>
                                <td>
                                    <router-link to="/admin/product/update" class="btn btn-primary text-white">
                                        Update
                                    </router-link>
                                </td>
                                <td>
                                    <router-link to="/admin/product/delele" class="btn btn-primary text-white">
                                        Delete
                                    </router-link>
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default{
        name: 'AdminProduct',
        components: {

        },
        computed: {
            ...mapGetters(['find','getProducts'])
        }
    }
</script>

<style>

</style>