<template>
    <div>
        <h2>Add new product</h2>
        <div class="row mb-5">
            <div class="col-sm-12 d-flex justify-content-center">
                <div class="card text-center">
                    <div class="card-body">
                        <form @submit.prevent="addNewProduct">
                            <div class="form-group">
                                <label class="form-label" for="name">ID</label>
                                <input class="form-control" type="number" id="id" v-model="product.id" readonly>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="name">Name</label>
                                <input class="form-control" type="text" id="name" v-model="product.name" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="image">Image</label>
                                <input type="file" @change="uploadImg">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="description">Description</label>
                                <textarea class="form-control" id="description" v-model="product.description"
                                    required></textarea>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="price">Price</label>
                                <input class="form-control" type="number" id="price" v-model="product.price" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="inStock">In Stock</label>
                                <input class="form-control" type="number" id="inStock" v-model="product.inStock"
                                    required>
                            </div>
                            <button class="btn btn-primary mt-3" type="button" @click="addNewProduct()">Add
                                Product</button>
                        </form>
                        <div class="btn" @click="showID()">Show</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            product: {
                id: null,
                name: '',
                image: '',
                description: '',
                price: 0,
                inStock: 0
            }
        };
    },
    methods: {
        ...mapMutations(['addProduct']),
        ...mapActions(['addImage']),
        uploadImg(event) {
            const image = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.product.image = e.target.result;
                this.addImage(this.product);
            };
            reader.readAsDataURL(image);
        },
        addNewProduct() {
            // Tạo một đối tượng mới từ dữ liệu trên form
            const newProduct = {
                id: this.$store.state.products.length + 1,
                name: this.product.name,
                image: this.product.image,
                description: this.product.description,
                price: this.product.price,
                inStock: this.product.inStock
            };
            // Gọi action addProduct của Vuex và truyền đối tượng mới vào
            this.addProduct(newProduct);
            // Xóa dữ liệu trên form
            this.product = {
                id: null,
                name: '',
                image: '',
                description: '',
                price: 0,
                inStock: 0
            };
        }
    },
};
</script>