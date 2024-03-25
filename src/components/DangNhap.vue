<template>
  <div class="container mt-5 mb-5">
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <form action="" style="width: 600px;text-align: start;">
         <h1 class="text-center">Đăng Nhập</h1>

            <div class="form-group" >
              <label for="">Nhập Email</label>
              <input type="text" name="email" v-model="email" id="" class="form-control" placeholder="" aria-describedby="helpId">
            </div>
            <div class="form-group" >
              <label for="">Nhập Mật Khẩu</label>
              <input type="text" name="password" v-model="password" id="" class="form-control" placeholder="" aria-describedby="helpId">
            </div>
            <div class="d-flex justify-content-around">
                <button type="button" class="btn btn-danger" @click="login()" >Đăng Nhập</button>
                <router-link class="btn btn-danger" to="/dangki">Đăng Kí</router-link>
            </div>
        </form>
        </div>
    </div>
  </div>
  
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    ...mapMutations(['dangNhap']),
    login(){
      let info={
        email:this.email,
        password:this.password
      }
      this.email="";
      this.password=""
      this.$store.commit('dangNhap',info)
    }
  }
}
</script>

<style>

</style>