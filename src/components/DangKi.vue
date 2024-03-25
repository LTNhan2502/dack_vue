<template>
  <div class="container mt-5 mb-5">
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <form action="" style="width: 600px;text-align: start;">
         <h1 class="text-center">Đăng Kí</h1>
         <div class="form-group" >
              <label for="">Nhập Họ Tên</label>
              <input type="text" name="hoten" v-model="hoten" id="" class="form-control" placeholder="" aria-describedby="helpId">
            </div>
            <div class="form-group" >
              <label for="">Nhập Email</label>
              <input type="text" name="email" v-model="email" id="" class="form-control" placeholder="" aria-describedby="helpId">
            </div>
            <div class="form-group" >
              <label for="">Nhập Mật Khẩu</label>
              <input type="password" name="password" v-model="password" id="" class="form-control" placeholder="" aria-describedby="helpId">
            </div>
            <div class="d-flex justify-content-around">
                <button type="button" class="btn btn-danger" @click="dangki()">Đăng Kí</button>
            </div>
                
        </form>
           
        </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data(){
    return{
      hoten:"",
      email:"",
      password:"",
    }
  },
  methods:{
    ...mapMutations(['handelDangKi']),
    dangki(){
      let dk={
        hoten:this.hoten,
        email:this.email,
        password:this.password
      }
      this.hoten="";
      this.email="";
      this.password="";
      this.$store.commit('dangKi',dk);
    }
  }

}
</script>

<style>

</style>