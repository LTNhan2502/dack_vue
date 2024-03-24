<template>
    <div class="addCategory">
        <div class="container">
            <div class="row">
                <div class="text-center">
                    <h3>Add Category</h3>
                </div>
            </div>
            <div class="row">
                <form action="">
                    <div class="mb-5">
                        <label for="" class="form-label">Name</label>
                        <input v-model="categoryName" type="text" name="" id="" class="form-control" placeholder=""
                            aria-describedby="helpId" />
                        <!-- <small id="helpId" class="text-muted">Help text</small> -->
                    </div>
                   <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
    const axios = require("axios");
    const sweetalert = require("sweetalert");
    export default {
        data(){
            return {
                id: "",
                categoryName: "",
            };
        },

        methods:{
            addCategory(){
                console.log(this.id, this.categoryName);
                const newCate = {
                    categoryName: this.categoryName,
                };
                const baseURL = "http://localhost:3000";
                axios({
                    method: 'post',
                    url: `${baseURL}/category`,
                    data: JSON.stringify(newCate),
                    headers:{
                        'Content-Type': 'application/json'
                    } 
                }).then(() => {
                    sweetalert({
                        text: "Added a category successfully",
                        icon: "success",
                    })
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>