const getters={
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
                // return e.name.toUpperCase()===state.searchValue.toUpperCase()
            })
           
        }
        // if(state.searchValue==""){
        //     console.log("hihi")
        //     return state.products
        // }else{
        //     // let arr
        //    return state.products.filter(e=>{
        //         return e.name.toUpperCase().startsWith(state.searchValue.toUpperCase())
        //         // return e.name.toUpperCase()===state.searchValue.toUpperCase()
        //     })
        //     // console.log(state.searchValue)
        //     // console.log('find',arr)
        //     // return arr;
        // }
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