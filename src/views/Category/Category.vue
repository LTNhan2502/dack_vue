<template>
    <div class="addCategory">
        <div class="container">
            <div class="row mb-2">
                <div class="col-lg-8 text-start">
                    <h3>Category</h3>
                </div>
                <div class="col-lg-3 text-end">
                    <router-link :to="{name: 'AddCategory'}">
                        <button class="btn btn-primary">Add anew</button>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="table-responsive">
                    <table class="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name Category</th>
                                <th scope="col" colspan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item of categories" :key="item.id">
                                <td scope="row">
                                    <CategoryBox :category="item.id"></CategoryBox>
                                </td>
                                <td>
                                    <CategoryBox :category="item.categoryName"></CategoryBox>
                                </td>
                                <td><a href="">Edit</a></td>
                                <td><a href="">Delete</a></td>
                            </tr>

                        </tbody>
                    </table>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios")
import CategoryBox from '../../components/Category/CategoryBox.vue'
export default {
    name: "CategoryHome",
    components: { CategoryBox },
    data() {
        return {
            baseURL: "http://localhost:3000",
            categories: [],
        };
    },

    methods: {
        async getCategories() {
            await axios.get(`${this.baseURL}/category`)
                .then(res => {
                    this.categories = res.data
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
    mounted() {
        this.getCategories();
    }
}
</script>