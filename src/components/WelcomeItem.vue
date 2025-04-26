
<script>
export default{
data(){return{
    labels:['Home','Cart','Sign In','My Account','Contact Us','About Us'],
    icons:['pi pi-home','pi pi-shopping-cart','pi pi-user','pi pi-heart','pi pi-envelope','pi pi-info-circle'],
    name:['Login'],
    links:['/','/cart','/login','/my-page','/contact-us','/about-us'],
}}};


import 'primeicons/primeicons.css'

const Sun=document.querySelector('.pi-sun');
const text=document.querySelector('.text');


</script>

<template>
    
<i class="pi pi-spin pi-sun" style="font-size: 3vh"></i>
 <div class="text">Hey SunShine!
 </div>
 <p class="separator">
    --------
 </p>
<p></p>
<router-link v-for="(label,index) in labels" :key="index" :to="links[index]" class="cont">
   <i :class="icons[index]" :style="{ fontSize: 'clamp(0.5vh, 3vw, 3vh)' }" ></i>
   <div class="text"> {{labels[index]}}</div>
</router-link>

</template>

<style scoped>
/* body{
    height: 100%;
    width: 2;
    position: fixed;
} */
.separator{
margin-left: 8%;
color: rgb(162, 0, 0);
font-size: 4%;
margin-bottom: 5%;
}
.cont{
    display: flex;
    flex-direction: column;
    padding-top:1%;
    padding-bottom:3%;
    text-align: center;
    margin-top:60% ;
    border-style: ridge ;
    /* margin-right: 3.5%; */
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    height: 8%;
    /* font-size: clamp(0.18vh, 1.16vh, 5.33vh); */
    overflow: hidden;
    text-overflow: ellipsis;
}
.cont:hover{
    background-color:  rgb(149, 13, 13);
    border:1% inset rgb(149, 13, 13) ;
}
/* .cont:visited, .cont:active,.cont:focus{
  text-decoration: none;
  color: inherit;
} */
#lable {
    font-size: 3%;
    font-weight: bold;
    color: black;
    padding-top:1.3%;
    padding-bottom:1.3%;
}
.pi{
    color:#FFD700
}
.pi-spin{
    padding-bottom:20% ;
    margin-bottom:20% ;
}
.pi:hover{
    color:#B8860B ;
    transform: translateX(2.5%) 0.5s ease-out;

}
.text{
    color: black;
    display: contain;
    font-size: clamp(0.5vh,0.9vw, 1.5vh)
    
}

@media (max_width:768px){
    
    .text{
        font-size: 2vh;
    }
}
</style>


