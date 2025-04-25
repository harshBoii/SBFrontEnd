<template>
    <div id="Left">
       <div id="title"> Your Cart</div>
        <router-link v-for="item in cart" :key="item.id" :to="{ name: 'CardDetail', params: { id: item.id }}">
            <div class="Desc">
                <div class="text">
                        <h1>{{item.name}}</h1>
                        <p>{{item.description}}</p>
                        <p>Price: {{item.price}}</p>
                        <p style="font-size: 15px;">Quantity: <span @click="remove" style="font-size: 15px; border: 2px solid black; border-radius: 100%;background-color: mediumaquamarine;">+</span> {{item.quantity}} <span @click="remove" style="font-size: 15px; border: 2px solid black; border-radius: 100%;background-color: red">--</span></p>
                        <p>Total: {{item.price * item.quantity}}</p>
                </div>
                <div class="ImageDiv">
                        <img :src="item.image1" alt="Image" class="image" />
                </div>

            </div>

        </router-link>
    </div>
    <div id="Right">
        <h1 class="head"> Order Details </h1>
        <div class="main">
            <div id="Info">
                <p>Items Added: <span class="Rt">{{ item_no }}</span></p>
                <p>Deliver To: <span class="Rt">{{ cart[0].address }}</span></p>
                <p>Email: <span class="Rt">{{ cart[0].email }}</span></p>
                <p>Phone: <span class="Rt">{{ cart[0].phone }}</span></p>

            </div>
            <div id="Price">
                <p>Price :<span class="Rt">{{ total }}</span></p>
                <p>Discount: <span class="Rt">₹ &nbsp; 0</span></p>
                <p>Delivery Charge: <span class="Rt">₹ &nbsp; 0</span></p>
                <p>Total : <span class="Rt">{{ total }}</span></p>

            </div>            

            <button class="button-30" role="button">Place Order</button>

        </div>
    </div>
</template>

<script >

export default{

computed:{
cart(){
        return this.$store.state.Cart
    },
total(){
        const total= this.$store.state.Cart.reduce((a,item)=>a+(item.price*item.quantity),0)

        return Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(total);

},
item_no(){
    return this.$store.state.Cart.reduce((a,item)=>a+item.quantity,0)
}
}, 

created(){
    this.$store.dispatch('getCart')
    console.log(this.$store.state.Cart)
},
methods:{}
 }
</script>

<style scoped>
#Left{
    width: 60%;
    background-color: white ;
    position: absolute;
    left: 4%;
    font-size: 40px;
    text-align: center;
    font-family: 'Quicksand';
    color: #f7e256;
    box-shadow: 0 4px 8px rgb(254, 254, 0);

}
#title{
    box-shadow: 0 2px 6px rgb(255, 230, 0);
    background-color:#2E294E ;
    position: sticky;
    top: 0;
}
.Desc{
    border: 2px solid #FFC13B ;
    background-color: white;
    color: #2E294E;
    display: flex;
    box-shadow: 5px 4px 8px rgb(72, 72, 72);
    transition: transform 0.5s;

}

.Desc:hover{
    background-color: #2E294E ;
    color: white;
    cursor: pointer;
    box-shadow: 15px 14px 18px rgb(229, 194, 35);
    transform: translateY(-5px);
}

.text{
    width: 100%;
    height: 20%;
    font-size: 1.6vh;
}

.text:hover{
    color: #FFC13B;
    cursor: pointer;
}

.ImageDiv{
    width: 20%;
    height: 200px;
    right: 0%;
} 

.image {
    border: 1px double #2E294E;
    border-radius:1px ;
    object-fit: contain;
    background-position: center;
    height: 100%;
    width: 100%;
    background-color: #2E294E;
}

#Right{
    width: 35%;
    height: 100%;
    position: fixed;
    right: 0;
    font-size: 40px;
    font-family: 'Quicksand';

}

.head{
    text-align: center;
    font-family: 'Italiana';
    color: #f7e256;
    background-color: black;
    box-shadow: 0 4px 8px rgba(254, 254, 0, 0.805);
    font-size: 35px;
}

#total{
    font-size: 20px;
    background-color: white ;
    color: black;
    box-shadow: 0 4px 8px rgb(254, 254, 0);

}
 #Info{
    font-size: clamp(1vh,3vh,2vh);
    background-color: white ;
    color: black;
    box-shadow: 0 4px 8px rgb(254, 254, 0);
    
 }
 .Rt{
    text-align: right;
    right: 10px;
    position: absolute;
 }
 #Price{
    font-size: 20px;
    background-color: white ;
    color: black;
    box-shadow: 0 4px 8px rgb(254, 254, 0);

 }

 /* button style */
 .button-30 {
  align-items: center;
  appearance: none;
  background-color: #f7e256;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#fff56c 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "Quicksand";
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

.button-30:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

@media (max-width:768px) {

    .button-30{
        width: 18.3vh;
    }
    #Left{
        width: 45%;
        left: 17%;
        
    }
    .text{
        font-size: 1vh;
        h1{
            font-size: 3vh;
        }
    }
    #Right{
        font-size: 2vh;
    }
    #Info{
        font-size: 0.7vh;
    }
    #Price{
        font-size: 1vh;
    }
}
</style>