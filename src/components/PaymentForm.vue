<template>
    <div class="payment-form">
      <h2>Đặt hàng</h2>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-group">
          <label for="name" class="label">Tên:</label>
          <input type="text" id="name" v-model="formData.name" class="form-control" required>
          <span v-if="!isValidName" class="error-message">Vui lòng nhập tên</span>
        </div>
        <div class="form-group">
          <label for="address" class="label">Địa chỉ:</label>
          <input type="text" id="address" v-model="formData.address" class="form-control" required>
          <span v-if="!isValidAddress" class="error-message">Vui lòng nhập địa chỉ</span>
        </div>
        <div class="form-group">
          <label for="phone" class="label">Số Điện Thoại:</label>
          <input type="text" id="phone" v-model="formData.phone" class="form-control" required>
          <span v-if="!isValidPhone" class="error-message">Vui lòng nhập số điện thoại</span>
        </div>
        <div class="form-group">
          <label for="email" class="label">Email:</label>
          <input type="email" id="email" v-model="formData.email" class="form-control" required>
          <span v-if="!isValidEmail" class="error-message">Vui lòng nhập email</span>
        </div>
        <div class="form-group">
          <label for="paymentMethod" class="label">Phương thức thanh toán:</label>
          <select v-model="formData.paymentMethod" class="form-control">
            <option value="cash">Thanh toán khi nhận hàng</option>
            <option value="momo">Ví MoMo</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block" @click="removeInStock(getCarts)">Xác nhận đặt hàng</button>
      </form>
      <InvoicePayment v-if="showInvoice" :formData="formData" :carts="carts" />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sản phẩm</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Giá</th>
            <th scope="col">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts" :key="item.id">
            <td>
              <img :src="item.image" class="product-image" alt="Product Image" />
              {{ item.name }}
            </td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price.toFixed(3) }}VND</td>
            <td>{{ (item.quantity * item.price).toFixed(3) }}VND</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import InvoicePayment from './InvoicePayment.vue';
  import { mapGetters, mapMutations } from 'vuex';
  
  export default {
    name: 'PaymentForm',
    components: {
      InvoicePayment
    },
    data() {
      return {
        formData: {
          name: '',
          address: '',
          phone: '',
          email: '',
          paymentMethod: 'Tiền mặt'
        },
        showInvoice: false
      };
    },
    computed: {
      ...mapGetters(["getCarts","getInStock"]),
      carts() {
        return JSON.parse(this.$route.query.carts || '[]');
      },
      isValidName() {
        const name = this.formData.name.trim();
        return name.length >= 2 && /^[a-zA-Z\s]*$/.test(name);
      },
      isValidPhone() {
        const phone = this.formData.phone.trim();
        return /^\d{10,11}$/.test(phone);
      },
      isValidAddress() {
        return this.formData.address.trim() !== '';
      },
      isValidEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.formData.email.trim());
      }
    },
    methods: {
      ...mapMutations(['removeInStock']),
      submitForm() {
        if (this.isValidAddress && this.isValidEmail && this.isValidName && this.isValidPhone) {
          console.log('Giá trị của carts:', this.carts);
          this.$router.push({
            name: 'InvoicePayment',
            query: {
              ...this.formData,
              ...this.$route.query,
              carts: JSON.stringify(this.carts),
            },
          });
          this.showInvoice = true;
          
        } else {
          console.log('Vui lòng điền đầy đủ thông tin và đúng định dạng');
        }
      },

      // confirmPay(){
      //   this.removeInStock;
      // }
    },
  };
  </script>
  
  <style scoped>
  .payment-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .label {
    font-weight: bold;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-control {
    width: calc(100% - 20px);
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn-primary {
    background-color: #1ff474;
    border: none;
    padding: 12px 0;
  }
  
  .btn-block {
    display: block;
    width: calc(100% - 20px);
    margin: 20px 0;
  }
  
  .error-message {
    color: red;
  }
  
  .product-image {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .table th,
  .table td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }
  
  .table th {
    background-color: #007bff;
    color: #fff;
  }
  
  </style>
  