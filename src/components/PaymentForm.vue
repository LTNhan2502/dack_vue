<template>
    <div class="payment-form">
      <h2>Đặt hàng</h2>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-group">
          <label for="name" class="label">Tên:</label>
          <input type="text" id="name" v-model="formData.name" class="form-control" required>
          <span v-if="!isValidName" class="error-message">Tên phải chứa ít nhất 2 ký tự </span>
        </div>
        <div class="form-group">
          <label for="address" class="label">Địa chỉ:</label>
          <input type="text" id="address" v-model="formData.address" class="form-control" required>
          <span v-if="!isValidAddress" class="error-message">Địa chỉ không được để trống</span>
        </div>
        <div class="form-group">
          <label for="creditCard" class="label">Số Điện Thoại</label>
          <input type="text" id="creditCard" v-model="formData.phone" class="form-control" required>
          <span v-if="!isValidPhone" class="error-message">Số điện thoại không đúng</span>
        </div>
        <div class="form-group">
          <label for="expiryDate" class="label">Email</label>
          <input type="text" id="expiryDate" v-model="formData.email" class="form-control" required>
          <span v-if="!isValidEmail" class="error-message">Email không được để trống và phải đúng định dạng</span>
        </div>
        <div class="form-group">
                <label for="paymentMethod" class="form-label">Phương thức thanh toán:</label>
                <select v-model="formData.paymentMethod" class="form-control">
                  <option value="Tiền mặt">Thanh toán khi nhận hàng</option>
                  <option value="momo">Ví MoMo</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
        <button type="submit" class="btn btn-primary btn-block">Xác nhận đặt hàng</button>
      </form>
      <InvoicePayment v-if="showInvoice" :formData="formData" :carts="carts" />
      <table class="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Into Money</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts" :key="item.id">
              <td>
                <img :src="item.image" style="width: 50px; height: 50px;" />
                {{ item.name }}
              </td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price }}$</td>
              <td>{{ item.quantity * item.price }}$</td>
            </tr>
          </tbody>
        </table>
      
    </div>
  </template>
  
  <script>
  import InvoicePayment from './InvoicePayment.vue';
  import { mapGetters } from 'vuex';
  
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
          
          
        },
        showInvoice: false
      };
    },
    computed: {
        ...mapGetters(["getCarts"]),
        carts() {
      return JSON.parse(this.$route.query.carts || '[]'); // Chuyển chuỗi JSON thành mảng carts
    },

      isValidName() {
        const name = this.formData.name.trim();
        return name.length >= 2 && /^[a-zA-Z]+$/.test(name);
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
        submitForm() {
            
  if (this.isValidAddress && this.isValidEmail&& this.isValidName && this.isValidPhone) {
    console.log('Giá trị của carts:', this.carts);
    this.$router.push({ 
      name: 'InvoicePayment', 
      query: { 
        ...this.formData, 
        ...this.$route.query, // Thêm thông tin từ URL hiện tại
        carts: JSON.stringify(this.carts) 
      } 
    });
    this.showInvoice = true;
  } else {
    // Hiển thị thông báo lỗi hoặc xử lý tùy ý
    console.log('Vui lòng điền đầy đủ thông tin và đúng định dạng');
  }
}


    }
  };
  </script>
  
  <style scoped>
  .payment-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #f76c6c; /* Màu sắc theo thiết kế */
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ced4da;
    border-radius: 4px;
  }
  
  .btn {
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary {
    color: #fff;
    background-color: #f76c6c; /* Màu sắc theo thiết kế */
    border: 1px solid #f76c6c; /* Màu sắc theo thiết kế */
  }
  
  .btn-primary:hover {
    background-color: #d44242; /* Màu sắc theo thiết kế */
    border-color: #d44242; /* Màu sắc theo thiết kế */
  }
  
  .btn-block {
    display: block;
    width: 100%;
  }
  
  .error-message {
    color: red;
  }
  
  .invoice {
    margin-top: 40px;
  }
  
  .invoice h2 {
    color: #f76c6c; /* Màu sắc theo thiết kế */
  }
  
  .product-image {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  </style>
  