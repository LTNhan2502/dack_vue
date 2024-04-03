const getters={
    isAdmin: state => {
        // Lấy thông tin người dùng hiện tại từ state
        const currentUser = state.users.find(user => user.hoten === 'admin');

        // Kiểm tra xem người dùng hiện tại có họ tên là "admin" hay không
        if (currentUser && currentUser.hoten === 'admin') {
            return true;
        }
        return false;
    },
    getProducts: state => state.products,
    getCarts:state=>state.cart,
    getInStock:state=>id=>state.products.find(e=>e.id==id),
    getCountCarts:function(state,getters){
       if(getters.getCarts.length>0){
        return getters.getCarts.length;
       }
    },
    detailProduct:state=>id=>{
     return  state.products.find(e=>e.id==id)
    },
    getTotalCarts:state=>state.cart.reduce((total,e)=>{
          console.log("sdasdsa")
            return total+=e.price*e.quantity;
    },0),
    find:(state)=>{
        if(state.searchValue==""){
            return state.products
        }else{
         return state.products.filter(e=>{
                return e.name.toUpperCase().startsWith(state.searchValue.toUpperCase())                
            })
           
        }
        
    },
  
    paginate(state,getters){
       let start= (state.currentPage-1)*state.limit
         let end = start+state.limit
       state.lengthProducts=getters.find.length;
       console.log(state.lengthProducts)
       if(state.searchValue!=""){
        start=0;
        end=getters.find.length;
    }
       return  getters.find.slice(start,end)
    },
    getPages(state){
        console.log(Math.ceil(state.lengthProducts/state.limit))
        return Math.ceil(state.lengthProducts/state.limit)
    },
    orderByPrice:(state,getters)=>{

        if(state.orderBy){
            console.log("searchValue",state.searchValue)
            console.log("orderby",state.orderBy)
           state.products.sort((a,b)=>{
                if(state.orderBy=="Asc"){
                    return a.price-b.price
                }else{
                    return b.price-a.price
                }
            })
            return getters.paginate
        }else{
         return   getters.paginate
        }
        
    }
}
export default getters