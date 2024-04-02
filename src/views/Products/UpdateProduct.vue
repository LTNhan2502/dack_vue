<template>
    <div class="edit-product-container">
        <div class="">
            <h2>Update a product</h2>
        </div>
        <form class="edit-product-form">
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" v-model="product.id" readonly>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" v-model="product.name" required>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" class="form-control" id="price" v-model="product.price" required>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="inStock">In Stock</label>
                        <input type="number" class="form-control" id="inStock" v-model="product.inStock" required>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" id="description" v-model="product.description"
                            rows="6"></textarea>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="image">Image</label>
                        <img :src="product.image" alt="Product Image" class="product-image" width="145px"
                            height="145px">
                        <input class="form-control" type="file" id="image" @change="uploadImage">
                    </div>
                </div>
            </div>
            <div class="row mt-4 d-flex justify-content-between">
                <div class="col-lg-6">
                    <button class="btn btn-primary">Cancel</button>
                </div>
                <div class="col-lg-6">
                    <button class="btn btn-primary" @click.prevent="editProduct">Save</button>
                </div>
            </div>
        </form>

    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
    name: 'UpdateProduct',
    data() {
        return {
            id: null,
            product: {},
        };
    },
    computed: {
        ...mapState(['products']),
        ...mapGetters(['detailProduct']),
    },
    created() {
        this.product = { ...this.detailProduct(this.$route.params.id) };
    },
    methods: {
        ...mapActions(['update_Product']),
        uploadImage(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.product.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        editProduct() {
            this.update_Product(this.product);
            this.$router.push('/admin/product');
        },

    },
};
</script>

<style>
.edit-product-container {
    width: 500px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: 50px 0px 50px 32%;
}
</style>
