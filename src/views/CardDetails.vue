<script>

export default{
    computed:{
      about(){
        return this.$store.getters.getProductById(this.$route.params.id)
      },
      price(){
        const price = this.about.price
        return Intl.NumberFormat('en-IN',{
          style: 'currency',
          currency: 'INR',
        }).format(price)
      }
    },
    created(){
      if(!this.about){
        this.$store.dispatch('fetchProducts')
        console.log('fetching products')
      }
    },
    methods:{
    
    async AddCart() {
      try {
        const token = localStorage.getItem('Token');
        
        const response = await fetch('https://swarnabhushan.onrender.com/api/Cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          credentials: 'include',
          body: JSON.stringify({
            Prod_id: this.about.id
          })
        });
        
        const result = await response.json();
        
        if (response.ok && result.status === 200) {
          alert('Added to Cart');
          this.$store.dispatch('getCart')

        } else {
          alert(result.message || 'Error adding to cart');
        }
      } catch (error) {
        console.error('AddCart error:', error);
        alert('Network or server error');
      }
    },
    async removeProduct() {
      
        const token = localStorage.getItem('Token');
        
        const response = await fetch('https://swarnabhushan.onrender.com/api/DelCart',{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
          credentials: 'include',
          body: JSON.stringify({
            Prod_id: this.about.id
          })
        })
        const result = await response.json();
        if (response.ok && result.status === 200) {
          alert('Removed from Cart');
          this.$store.dispatch('getCart')
        } else {
          alert(result.message || 'Error removing from cart');
        }
      
}
}
}
</script>  

<template>

 <div class="top"> 
  <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">Swarn-Abhushana</a>
  <form class="form-inline">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
  </form>
</nav>
</div>

  <div class="left">
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="about.image1" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="about.image1" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="about.image3" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev button" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon button" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next button" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon button" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  

</div>
 
<div id="LB">
  <button class="details1" @click="removeProduct">- One Item</button>
  <button class="details1" @click="AddCart">Add To Cart</button>

</div>


</div>
  
  <div class="right">
    <div class="details">
    <h1 style="font-family: 'Dosis';font-size:7vh;text-align: center;"> Jewellery <span>Details</span></h1>
    
  </div>
  <div class="content">
      <h1 style="text-align: center">
        {{about.name}}
      </h1>
      <h2 style="font-family: 'Dosis';font-size:17px;margin-top: 5%;">
        <span style="color:gold;font-size:20px;margin-right:5px ;">&nbsp;</span>{{price}}
      </h2>
      <p style="font-size:12px ; margin-top: 8%;">
        Tax included. <span style="color:red;font-size:15px; ">Shipping</span> calculated at checkout.
      </p>
      <p style="font-family: 'Dosis';font-size:20px;margin-top: 15%;">
        {{about.description}} 
      </p>
      <a href="">
      <p style="font-size:17px ; margin-left:0%;margin-top: -2%;">
        Add To Wishlist <span style="color:red;font-size:25px; "> ♡ </span> .
      </p> 
    </a>   
    </div>

  </div>
   
</template>

<style scoped>
.left{
    left: 7%;
    top:23%;
    width: 35%;
    height: 70vh;
    align-self: center;
    position: absolute;
    border: 2px solid gold;
    border-radius: 5%;
    overflow: hidden;
}
.right{
    top:10%;
    width: 50%;
    height: 800px;
    align-self: center;
    position: absolute;
}


.carousel-inner, .carousel-item {
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  object-position:center center;
}
.button{
  background-color:rgba(255, 217, 0, 0.102);
  width: 40px;
}
.button:hover{
  background-color: rgba(255, 217, 0, 0.413);

  color: black;
}
.top{
  position: absolute;
  left: 4.3%;
  top:0%;
  width:95.3%;
  height: 5%;
  background-color: black;
  z-index: 200;
}

.form-inline{
display: flex;}

.navbar{
  background-color: whitesmoke ;
  border-bottom: 1.5px solid gold;
  border-left:1.5px solid gold ;
  border-radius:2% ;
}
.navbar-brand{
  font-family: "Agu Display";
  font-size: 30px;
  color: gold;
}
.details{
  position: relative;
  border: 2px solid gold;
  text-align: center;
  border-top-left-radius:40px ;
  border-bottom-right-radius:40px ;
  background: linear-gradient(180deg, rgb(205, 187, 88) 0%, rgb(255, 217, 0) 100%); /* Gradient effect */
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  margin-top: 5%;

}

.details:hover{
  background: linear-gradient(180deg, rgb(247, 232, 145) 0%, rgb(250, 213, 0) 100%);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.53);


}

.btn{
  color: gold;
  border: 1px solid gold;
}

#LB{
  width: 25%;
  height: 7%;
  position: fixed;
  bottom: 10%;
  left: 12%;
  right: 50%;
  display: flex;

}

.details1{
  position: relative;
  border: 2px solid gold;
  border-radius: 25px;
  background: linear-gradient(180deg, rgb(205, 187, 88) 0%, rgb(255, 217, 0) 100%); /* Gradient effect */
  color: white;
  box-shadow: 0 0.6vh 1vh rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  width: 80%;
  text-align: center;
  justify-content: center;
  font-size: 120%;
  margin-left: 8%;
  font-family: 'Dosis';

}
.details1:hover{
  background: linear-gradient(180deg, rgb(247, 232, 145) 0%, rgb(250, 213, 0) 100%);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.53);
}
.content{
  font-family: 'Ysabeau SC';
  font-size:45px;
  margin-top:10% ;
  text-align: center;
}
body{
  background-color: #f7d8b0 ;
  z-index: 100;
}
</style>