import {createStore} from 'vuex'

const store = createStore({
   state:
   {
    Cards:[],
    Cart:[],
    user:''
   },
   mutations:{
        setItems(state,Items){
          state.Cards=Items
        },
        setCart(state,pro){
          state.Cart=pro
        },
        setUser(state,user){
          state.user=user
        },
        removeCart(state){
          state.Cart=[]
          localStorage.removeItem('Token')
        }
   },
   actions:{
    async fetchProducts({commit}){
      const response= await fetch('https://swarnabhushan.onrender.com/api/cards')
      const data= await response.json()
      commit('setItems',data)
    },
    async getCart({commit}){
      const response = await fetch('https://swarnabhushan.onrender.com/api/getcart',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${localStorage.getItem('Token')}`
      }
    })
      const data = await response.json()
      console.log(data)
      commit('setCart',data)
    },
    async getUser({commit}){
      const response = localStorage.getItem('Token')
      commit('setUser',response)
    }
    
    
   },
   getters:{
    getProductById:(state)=>(id)=>{
      return state.Cards.find(prouct=>Number(prouct.id)===Number(id)) 
   }
  }
});

export default store