import router from "@/router";
const mutations ={
add(state,product){
  let item={
    ...product,
    quantity:1
  }
    let checkRepeat=state.cart.findIndex(e=>e.id==item.id);
    // checkRepeat!=-1? state.cart[checkRepeat].quantity++:state.cart.push(item)
    if(checkRepeat!=-1){
      state.cart[checkRepeat].quantity+=1;
      state.cart[checkRepeat].inStock-=1;
      state.products.find(e=>e.id==item.id?e.inStock-=1:"")
      console.log("products",state.products)
    }else{
      state.cart.push(item);
      state.cart.find(e=>e.id==product.id?e.inStock-=1:"")
      state.products.find(e=>e.id==item.id?e.inStock-=1:"")
      
    }
    // state.cart[checkRepeat].inStock--;

},
orderByPrice(state,param){
  console.log(param)
state.orderBy=param
// state.isFlag=true;
},
increase(state,item){
  state.products.find(e=>e.id==item.id?e.inStock--:"")
  state.cart.find(e=>e.id==item.id?e.quantity++&&e.inStock--:"")
},
reduce(state,item){
  console.log(item)
  state.cart.find(e=>e.id==item.id?e.quantity--&&e.inStock++:"")
  state.products.find(e=>e.id==item.id?e.inStock++:"")
  console.log(state.products)
},
search(state,value){
    state.searchValue=value;
    // state.isFlag=false;
},
remove(state,product){
  let index=state.cart.findIndex(e=>e.id==product.id);
  state.products.find(e=>e.id==product.id?e.inStock++:"")
  if(index!=-1){
    state.cart[index].inStock+=1;
    state.cart[index].quantity-=1;
  }
  if(state.cart[index].quantity==0){
    state.cart.splice(index,1);  

  }
  // return state.cart;
},
removeAll(state,cart){
  state.cart=[];
  console.log(cart)
  cart.forEach(e=> {
    state.products.find(product=>product.id==e.id?product.inStock+=e.quantity:"")
  });
},
dangKi(state,info){
  if(info.email!="" && info.password!="" && info.hoten!=""){
    if(JSON.parse(localStorage.getItem('Users'))!=null){
      state.users.length==0?state.users.push(...JSON.parse(localStorage.getItem('Users'))):''
    }
    state.users.push(info)
    localStorage.setItem('Users',JSON.stringify(state.users))
    alert("Đăng kí thành công")
    router.push('/login')
  }else{
    alert("Đăng Kí Thất Bại")
  }
},
verifyLogin(state){
  if(state.isLogin!=false){
    state.isLogin=true;
  }
},

changePage(state,numberPage){
  state.currentPage=numberPage;
},

dangNhap(state,info){
  console.log(info)
let users=JSON.parse(localStorage.getItem('Users'));
let kq=users.find(e=>e.email===info.email&&e.password===info.password)
console.log(kq)
if(kq){
  state.isLogin=true
  state.name=kq.hoten;
  alert("Đăng Nhập Thành Công");
  router.push("/")
}else{
  alert("Đăng Nhập Thất Bại");
}

},
dangXuat(state){
  state.isLogin=false;
  alert("Đăng xuất thành công")
  router.push('/')
}

}
export default mutations;