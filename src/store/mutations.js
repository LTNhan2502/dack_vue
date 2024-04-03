import router from "@/router";
import swal from "sweetalert";
const mutations = {
  add(state, product) {
    let item = {
      ...product,
      quantity: 1
    }
    let checkRepeat = state.cart.findIndex(e => e.id == item.id);
    // checkRepeat!=-1? state.cart[checkRepeat].quantity++:state.cart.push(item)
    if (checkRepeat != -1) {
      state.cart[checkRepeat].quantity += 1;
      state.cart[checkRepeat].inStock -= 1;
      state.products.find(e => e.id == item.id ? e.inStock -= 1 : "")
      console.log("products", state.products)
    } else {
      state.cart.push(item);
      state.cart.find(e => e.id == product.id ? e.inStock -= 1 : "")
      state.products.find(e => e.id == item.id ? e.inStock -= 1 : "")

    }
  },
  orderByPrice(state, param) {
    console.log(param)
    state.orderBy = param    
  },
  increase(state, item) {
    state.products.find(e => e.id == item.id ? e.inStock-- : "")
    state.cart.find(e => e.id == item.id ? e.quantity++ && e.inStock-- : "")
  },
  reduce(state, item) {
    console.log(item)
    state.cart.find(e => e.id == item.id ? e.quantity-- && e.inStock++ : "")
    state.products.find(e => e.id == item.id ? e.inStock++ : "")
    console.log(state.products)
  },
  search(state, value) {
    state.searchValue = value;
    // state.isFlag=false;
  },
  remove(state, product) {
    let index = state.cart.findIndex(e => e.id == product.id);
    state.products.find(e => e.id == product.id ? e.inStock++ : "")
    if (index != -1) {
      state.cart[index].inStock += 1;
      state.cart[index].quantity -= 1;
    }
    if (state.cart[index].quantity == 0) {
      state.cart.splice(index, 1);

    }
  },
  removeAll(state, cart) {
    state.cart = [];
    console.log(cart)
    cart.forEach(e => {
      state.products.find(product => product.id == e.id ? product.inStock += e.quantity : "")
    });
  },
  dangKi(state, info) {
    if (info.email !== "" && info.password !== "" && info.hoten !== "") {
      const users = JSON.parse(localStorage.getItem('Users')) || [];
      state.users = users;
      state.users.push(info);
      localStorage.setItem('Users', JSON.stringify(state.users));
      swal("Thành công!", "Đăng kí thành công!", "success").then(() => {
        router.push('/dangnhap');
      });
    } else {
      swal("Thất bại!", "Đăng kí thất bại!", "error");
    }



  },
  verifyLogin(state) {
    if (state.isLogin != false) {
      state.isLogin = true;
    }
  },

  changePage(state, numberPage) {
    state.currentPage = numberPage;
  },

  dangNhap(state, info) {
    console.log(info)
    let users = JSON.parse(localStorage.getItem('Users'));
    let kq = users.find(e => e.email === info.email && e.password === info.password)
    console.log(kq)
    if (kq) {
      state.isLogin = true
      state.name = kq.hoten;
      swal("Thành công!", "Đăng nhập thành công!", "success").then(() => {
        router.push('/');
      });
    } else {
      swal("Thất bại!", "Đăng nhập thất bại!", "error");
    }
  },
  dangXuat(state) {
    state.isLogin = false;
    swal("Thành công!", "Đăng xuất thành công!", "success").then(() => {
      router.push('/');
    });
  },
  addProduct(state, product) {
    if (state.products.find(p => p.name === product.name)) {
      alert("Sản phẩm này đã tồn tại")
    } else {
      state.products.push(product);
      alert('Thêm sản phẩm thành công');
    }
  },
  showID(state) {
    state.products.forEach(product => {
      console.log(product.id);
    });
  },
  // mutations.js
  SET_IMAGE(state, product) {
    const index = state.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      state.products[index].image = product.image;
    }
  },
  deleteProduct(state, productId) {
    state.products = state.products.filter(product => product.id !== productId);
  },
  updateProduct(state, product) {
    let index = state.products.findIndex(e => e.id == product.id);
    if (index !== -1) {
      state.products[index].id = product.id;
      state.products[index].name = product.name;
      state.products[index].description = product.description;
      state.products[index].price = product.price;
      state.products[index].inStock = product.inStock;
      state.products[index].image = product.image;
      alert("Chỉnh sửa sản phẩm thành công")
    }
  },
  




}


export default mutations;