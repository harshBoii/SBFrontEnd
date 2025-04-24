
<script>
export default{
data(){return{
    labels:['Cart','Account','Home','Wishlist','Contact Us','About Us'],
    icons:['pi pi-shopping-cart','pi pi-user','pi pi-home','pi pi-heart','pi pi-envelope','pi pi-info-circle'],
    name:['Login'],
    links:['/cart','/login','/','/wishlist','/contact-us','/about-us'],
}}};


import 'primeicons/primeicons.css'

const Sun=document.querySelector('.pi-sun');
const text=document.querySelector('.text');


</script>

<template>

<i class="pi pi-spin pi-sun" style="font-size: 2rem"></i>
 <div class="text">Hey SunShine!
 </div>
 <p class="separator">
    --------
 </p>
<p></p>
<router-link v-for="(label,index) in labels" :key="index" :to="links[index]" class="cont">
   <i :class="icons[index]" style="font-size: 2rem"></i>
   <div class="text"> {{labels[index]}}</div>
</router-link>
</template>

<style>
.separator{
margin-left: 8%;
color: rgb(162, 0, 0);
font-size: 16px;
margin-bottom: 35px;
}
.cont{
    display: block;
    padding-top:7px;
    padding-bottom:10px;
    text-align: center;
    margin-top:60% ;
    border-style: ridge ;
    margin-right: 3.5%;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}
.cont:hover{
    background-color:  rgb(149, 13, 13);
    border:1.5px inset rgb(149, 13, 13) ;
}
/* .cont:visited, .cont:active,.cont:focus{
  text-decoration: none;
  color: inherit;
} */
#lable {
    font-size: 15px;
    font-weight: bold;
    color: black;
    padding-top:5px;
    padding-bottom:5px;
}
.pi{
    color:#FFD700
}
.pi-spin{
    padding-bottom:10px ;
    margin-bottom:15px ;
}
.pi:hover{
    color:#B8860B ;
    transform: translateX(10px) 0.5s ease-out;

}
.text{
    color: black;
    font-size: 13px;
    font-family: '';
}

@media (max_width:768px){
    
    .text{
        font-size: 6px;
    }
}
</style>


