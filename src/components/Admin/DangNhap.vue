<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <form class="login-form">
          <h1 class="text-center mb-4">Đăng Nhập</h1>
          <div class="form-group">
            <label for="email">Nhập Email</label>
            <input type="text" name="email" v-model="email" id="email" class="form-control" placeholder="Nhập Email">
          </div>
          <div class="form-group">
            <label for="password">Nhập Mật Khẩu</label>
            <input type="password" name="password" v-model="password" id="password" class="form-control" placeholder="Nhập Mật Khẩu">
          </div>
          <div class="d-flex justify-content-between mt-3">
            <button type="button" class="btn btn-primary" @click="login()">Đăng Nhập</button>
            <router-link class="btn btn-primary" to="/dangkiadmin">Đăng Kí</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations(['dangNhapadmin']),
    login() {
      let info = {
        email: this.email,
        password: this.password
      };
      this.email = "";
      this.password = "";
      this.$store.commit('dangNhapadmin', info);
    }
  }
};
</script>

<style scoped>
.login-form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.login-form h1 {
  color: #333;
}

.login-form label {
  font-weight: bold;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ced4da;
  border-radius: 5px;
}

.login-form input[type="text"]:focus,
.login-form input[type="password"]:focus {
  outline: none;
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.login-form .btn-primary {
  width: 48%;
}

.login-form .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.login-form .btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
