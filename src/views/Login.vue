<template>

    <div id="left">
        <div class="logo-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <!-- Outer circle with gold stroke -->
      <circle cx="150" cy="150" r="140" fill="#800000" stroke="#D4AF37" stroke-width="8"/>
      
      <!-- Ornate decorative lotus petals -->
      <g fill="#D4AF37">
        <path d="M150,60 C140,60 130,80 150,90 C170,80 160,60 150,60 Z" transform="rotate(0 150 150)"/>
        <path d="M150,60 C140,60 130,80 150,90 C170,80 160,60 150,60 Z" transform="rotate(45 150 150)"/>
        <path d="M150,60 C140,60 130,80 150,90 C170,80 160,60 150,60 Z" transform="rotate(90 150 150)"/>
        <path d="M150,60 C140,60 130,80 150,90 C170,80 160,60 150,60 Z" transform="rotate(135 150 150)"/>
        <path d="M150,60 C140,60 130,80 150,90 C170,80 160,60 150,60 Z" transform="rotate(180 150 150)"/>
        <path d="M150,60 C140,60 130,80 150,90 C170,80 160,60 150,60 Z" transform="rotate(225 150 150)"/>
        <path d="M150,60 C140,60 130,80 150,90 C170,80 160,60 150,60 Z" transform="rotate(270 150 150)"/>
        <path d="M150,60 C140,60 130,80 150,90 C170,80 160,60 150,60 Z" transform="rotate(315 150 150)"/>
      </g>
      
      <!-- Monogram: "SB" -->
      <text x="150" y="165" text-anchor="middle" fill="#D4AF37" font-family="Cinzel, serif" font-size="48" font-weight="bold">
        SB
      </text>
      
      <!-- Brand name -->
      <text x="150" y="260" text-anchor="middle" fill="#D4AF37" font-family="Cinzel, serif" font-size="20">
        Swarnabhushana
      </text>
    </svg>
  </div>

        <div class="Desc">
            <h1 class="head">Swaagatam</h1>
            Welcome to Swarnabhushana – where the timeless radiance of sacred gold meets modern elegance. Inspired by the ancient Vedic wisdom that revered gold as the symbol of purity, prosperity, and divine light, we invite you to become part of our exclusive family. At Swarnabhushana, every piece is crafted with care and steeped in tradition, reflecting the resplendent glow of Vedic gold. Join us on this journey of heritage and contemporary style, and adorn your life with the brilliance of true craftsmanship.
        </div>
    </div>
    <div id="right">

        <h1 class="head" style="font-family: 'Agu Display' ;"> Swarnabhushana</h1>
        <div id="container">
            <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true" class="glowSign">Sign up</label>
					<input type="email" name="newemail" placeholder="Email" required="True" class="label">
                    <input type="number" name="number" placeholder="Number" required="True" class="label">
					<input type="password" name="newpswd" placeholder="Password" required="True" class="label">
                    <input type="text" aria-multiline="true" name="address" placeholder="Address" required="True" class="label">

					<button @click="Signup">Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true" class="glow">Login</label>
					<input type="email" name="email" placeholder="Email" required="" class="label">
					<input type="password" name="pswd" placeholder="Password" required="" class="label">
					<button @click="Login">Login</button>
				</form>
			</div>
	</div>

        </div>
    </div>
</template>

<style scoped>
.glowSign{
    text-shadow: 0 5px 20px #000000;
}
.glow{
    text-shadow: 0 5px 20px #e8b32e;
}
.login,.signup{
    font-size: 26px;
    font-family: 'Quicksand';
}
.label{
    font-size: 14px;
    font-family: 'Quicksand';
}
#left {
    width: 41%;
    height: 100%;
    background-color: #2E294E ;
    position: fixed;
    left: 4%;
    font-size: 20px;
    border: 2px solid #D4AF37;
}
.Desc {
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 5%;
    font-family: 'Quicksand';
    color: #f7e256;
    width: 80%;
    justify-content: center;
    text-align: center;
    font-size: 17px;
}
.head{
    font-family: 'Pacifico';
    font-size: 50px;
    color: #f6cc41;
    text-align: center;
    margin-bottom: 40px;
    text-shadow: 0px 0px 20px #ffd752;
}
.logo-container {
    display: flex;
    height: 240px;
    width: 240px;
    margin-left: 28%;
    margin-top: 50px;
  }

  #right {
    width: 55%;
    height: 100%;
    position: fixed;
    right: 0;
    font-size: 20px;
    border-left: 2px solid #D4AF37;
}
#container {
width: 50%;
height: 50%;
position: absolute;
background-color: White;
left: 25%;
top: 25%;
font-size: 20px;
}


.main{
	width: 350px;
	height: 500px;
	background: red;
    overflow: hidden;
	background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #e7e412b9;
    margin-left: 10%;
}
#chk{
	display: none;
}
.signup{
	position: relative;
	width:100%;
	height: 100%;
    
}
label{
	color: #ffe942;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 50px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}
input{
	width: 60%;
	height: 10px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 12px;
	border: none;
	outline: none;
	border-radius: 5px;
}
button{
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: #fff;
	background: #f7e256;
	font-size: 1em;
	font-weight: bold;
	margin-top: 30px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
button:hover{
	background: rgb(128, 0, 0);
}
.login{
	height: 500px;
	background: #2E294E;
	border-radius: 60% / 10%;
	transform: translateY(-170px);
	transition: .8s ease-in-out;
}
.login label{
	color:#f7e256;;
	transform: scale(.6);
}

#chk:checked ~ .login{
	transform: translateY(-550px);
}
#chk:checked ~ .login label{
	transform: scale(1);	
}
#chk:checked ~ .signup label{
	transform: scale(.6);
}

</style>



<script setup>
import { Background, tsParticles } from 'tsparticles-engine';
import { onMounted } from 'vue';
onMounted:{
(async()=>{
    await loadFireflyPreset(tsParticles);
    await tsParticles.load("tsparticles", {
        preset:"firefly",
        background:{
            color:{
                value: '#fffff'
            }
        },
        particles:{
            color:{
                value:'#f2de63ff'
            },
            number:{
                value:50
            }
        }
    
        ,
    

})
})();
}
async function Login(){
    event.preventDefault();
    const email=document.querySelector('input[name="email"]').value;
    const password=document.querySelector('input[name="pswd"]').value;

    const res=await fetch('http://127.0.0.1:5000/api/Login',{
        method:'POST',
        headers: {
                'Content-Type': 'application/json'
            },
        credentials:'include',
        body:JSON.stringify({
            email,password
        }),
    
    });

    const data=await res.json();
    if(data.ok){
        localStorage.setItem('Token',data['access_token'])
        window.location.href='/';
        alert('Welcome Back');


    }
    else{
        alert(data['message']);
        console.log(data);
    }
    }
async function Signup(){
    event.preventDefault();
    const email=document.querySelector('input[name="newemail"]').value;
    const password=document.querySelector('input[name="newpswd"]').value;
    const number=document.querySelector('input[name="number"]').value;
    const address=document.querySelector('input[name="address"]').value;
    const res = await fetch('http://127.0.0.1:5000/api/Signup',{
        method:'post',
        headers: {
                'Content-Type': 'application/json'
            },
        credentials:'include',
        body:JSON.stringify({
            email,password,number,address
        }), 
    })
    const data = await res.json()
    if (data.ok){
        console.log(data);
        alert('Welcome to Swarnabhushana');
        this.$router.push('/');
    }
    else{
        alert(data.message);
    }}
</script>