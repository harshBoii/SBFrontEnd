<template>
  <section class="et-hero-tabs">
    <video autoplay muted class="Video-player">
  <source src="/Cover.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

    <div id="Brand">
    <h1 id="Logo">Swarn-Abhushana</h1>
    <h3 style="font-family: 'Birthstone';font-size:25px;">Sonaar ki Virasat, Smriti ki Pehchaan</h3>
    </div>
    <div class="et-hero-tabs-container">
      <a class="et-hero-tab" href="#tab-es6">Trusted By</a>
      <a class="et-hero-tab" href="#tab-flexbox">Our BestSellers</a>
      <a class="et-hero-tab" href="#tab-react">Bracelets</a>
      <a class="et-hero-tab" href="#tab-angular">Earrings</a>
      <a class="et-hero-tab" href="#tab-other">Rings</a>

      <span class="et-hero-tab-slider"></span>
    </div>
  </section>

  <div class="overlay">
  <main class="et-main">
    <section class="et-slide" id="tab-es6">
        <h1 class="Celebrities">Trusted By</h1>
        <div class="container">
            <div>
              <div class="content">

                <h2>Samantha Arora</h2>
                
                <span>Miss Fashionista 2023</span>
              </div>
            </div>
            <div>
              <div class="content">
                <h2>Aliya Pandey</h2>
                <span>Jewllery Expert</span>
              </div>
            </div>
            <div>
              <div class="content">
                <h2>Sushmita Jain</h2>
                <span>Miss Universe 2025</span>
              </div>
            </div>
            <div>
              <div class="content">
                <h2>Palak Goyal</h2>
                <span>Our CEO</span>
              </div>
            </div>
          </div>
    </section>
  
    <section class="et-slide" id="tab-flexbox">
      <div class="marquee-container">
      <div class="marquee-content">
        FLASH SALE: Save 30% on All Gold Jewellery! | Exclusive Offer: Buy One, Get One 50% Off on Diamond Earrings! | FREE Shipping on Orders Over $200! | Limited Time: 20% Off New Arrivals! | Members Only: Extra 10% Off on Luxury Rings! | Hot Deal: Save Up to 40% on Selected Pieces! | Special Offer: Complimentary Gift with Every Purchase! | Hurry! Limited Stock on Our Premium Collections!
      </div>
    </div>

      <h1>
        Choose from Our Best collection
      </h1>
       <section id="cards-section" class="cards-container">
        <router-link v-for="card in cards" :key="card.id" :to="{name:'CardDetail', params:{id: card.id}}">
        <div class="card">
        <img :src="card.image1" alt="No Image Found">
        <div class="card-content">
          <p class="card-description">{{ card.name }}</p>
          <p class="card-description">Rs.{{ card.price }}</p>
        </div>
      </div>
    </router-link>
      </section>   
      


     </section>

    <section class="et-slide" id="tab-react">
      <h1>React</h1>
      <h3>something about react</h3>
    </section>
    <section class="et-slide" id="tab-angular">
      <h1>Angular</h1>
      <h3>something about angular</h3>
    </section>
    <section class="et-slide" id="tab-other">
      <h1>Other</h1>
      <h3>something about other</h3>
    </section>
  </main>
</div>

</template>

<style>
#tab-es6{
  height: 100%;
  top:0
}
        body {
            font-family: "Century Gothic", 'Lato', sans-serif;
            background-color: #fff;
    }
    
    a {
        text-decoration: none;
    }
    
    .et-hero-tabs,
    .et-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        height: 100vh;
        position: relative;
            text-align: center;
            padding: 0 2em;
        h1 {
          font-size: clamp(2rem, 5vw, 3rem);
            margin-top: 2%;
            letter-spacing: 1rem;
        }
        h3 {
          font-size: clamp(1rem, 2vw, 1.25rem);
            letter-spacing: 0.3rem;
            opacity: 0.6;
        }
        margin-top: 2%;
    }
    
    .et-hero-tabs-container {
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        background: #fff;
       
    }
    .et-hero-tabs-container--top {
        bottom: 0;
        width: 100%;
        height: 10%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        background: #fff;
        z-index: 10;
        top: 0;
        video {
            display: none;
        }
        position: fixed;
    }
    .et-hero-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0.8%;
        color: #000;
        letter-spacing: 0.1rem;
            transition: all 0.5s ease;
            font-size: 0.8rem;
          &:hover {
                color:white;
          background: rgba(102,177,241,0.8);
                transition: all 0.5s ease;
        }
    }
    
    .et-hero-tab-slider {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 6px;
        background: #66B1F1;
        transition: left 0.3s ease;
    }
    
    @media (min-width: 800px) {
        .et-hero-tabs,
        .et-slide {
        h1 {
            font-size: 3rem;
        }
        h3 {
            font-size: 1rem;
        }
        }
        .et-hero-tab {
            font-size: 1rem;
        }
    }

    #Logo{
        font-size: 3rem;
        margin: 0;
        letter-spacing: 0.8rem;
        color: gold;
        font-family: "Agu Display";
    }
    #background-video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
      }
      #Brand{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: white;
      }
      .Video {
        top: 0;
        left: 0;
        width: 50%;
        height: 50%;
        z-index: -1;
        background-color: aliceblue;
      }
    .cards-container {
      margin-top: 1%;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5%;
      justify-content: center;
      padding: 1%;
    }
    .card {
      width: 300px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s;
      background: #fff;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-content {
      padding: 15px;
      font-family: 'Playfair Display', serif;
    }
    .card-title {
      font-size: 1.25rem;
      margin: 0 0 10px;
    }
    .card-description {
      font-size: 1rem;
      color: #555;
    }
      @import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.container {
  display: flex;
  justify-content: center;
  height: 500px;
  gap: 10px;
  margin-bottom: 20%;

  > div {
    flex: 0 0 330px;
    border-radius: 0.5rem;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    box-shadow: 1px 5px 15px #1e0e3e;
    position: relative;
    overflow: hidden;

    &:nth-of-type(1) {
      background: url("https://images.pexels.com/photos/29351977/pexels-photo-29351977/free-photo-of-elegant-bride-in-traditional-indian-attire.jpeg?auto=compress&cs=tinysrgb&w=1200")
        no-repeat 50% / cover;
    }
    &:nth-of-type(2) {
      background: url("https://images.pexels.com/photos/30929008/pexels-photo-30929008/free-photo-of-traditional-indian-woman-in-ornate-jewelry.jpeg?auto=compress&cs=tinysrgb&w=1200")
        no-repeat 50% / cover;
    }
    &:nth-of-type(3) {
      background: url("https://images.pexels.com/photos/27118152/pexels-photo-27118152/free-photo-of-portrait-of-a-bengali-bride-performing-hindu-wedding.jpeg?auto=compress&cs=tinysrgb&w=1200")
        no-repeat 50% / cover;
    }
    &:nth-of-type(4) {
      background: url("https://images.pexels.com/photos/25655890/pexels-photo-25655890/free-photo-of-woman-standing-in-traditional-clothing-and-with-jewelry.jpeg?auto=compress&cs=tinysrgb&w=1200")
        no-repeat 50% / cover;
    }

    .content {
      font-size: 1.5rem;
      color: #fff;
      display: flex;
      align-items: center;
      opacity: 0;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
      background: rgb(2, 2, 46);
      background: linear-gradient(
        0deg,
        rgba(2, 2, 46, 0.6755077030812324) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: translatey(100%);
      transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s;
      visibility: hidden;
        
      span {
        display: block;
        margin-top: 5px;
        font-size: 1.2rem;
      }
    }

    &:hover {
      flex: 0 0 250px;
      box-shadow: 1px 3px 15px #f5ea16;
      transform: translatey(-30px);
    }

    &:hover .content {
      opacity: 1;
      transform: translatey(0%);
      visibility: visible;
    }
  }
}
.Celebrities {
  font-family: "Ysabeau SC";
padding-bottom: 10%;
color: white;
position: relative;}
.overlay {
  background: white;
  /* Optional: Add opacity or other styles if desired */
  opacity: 0.96;           /* semi-transparent, so video is partially visible */
  z-index: 2;             /* above the video */
}

.marquee-container {
  width: 100%;
  overflow: hidden;  /* Hides overflowing content */
  background:#1e0e3e;
  padding: 2% 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  font-family: 'Playfair Display', serif;
  opacity: 0.5;
  margin-top: 0%;
  top: 0;
}
.marquee-content {
  display: inline-block;
  white-space: nowrap; /* Prevents text from wrapping */
  color: rosybrown;
  font-size: 95%;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  animation: marquee 50s linear infinite;
  margin-top: 0%;
}
@keyframes marquee {
  0% { transform: translateX(30%); }
  50%{ transform: translateX(-100%);}
}

.Video-player{
  width: 103%; 
  height: 100%;
  object-fit: cover;
}    

@media (max-width:784px){
  .Video-player{
    width: 103%;
    height: 100%;
    object-fit: cover;
  }
  .et-hero-tabs-container {
    display: none;
  }
  .et-slide {
    height: auto;
  }
  .et-slide h1 {
    font-size: 2rem;
  }
  .et-slide h3 {
    font-size: 1rem;
  }
  .et-hero-tab {
    font-size: 0.8rem;
  }
  .card{
    flex: 1 1 0;
  }
  .cards-container{
    display: flex;
    flex-direction: column;
  }
  #Brand{
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: white;
      }
  #tab-react ,
  #tab-angular ,
  #tab-other{
    visibility: hidden;
  }
  .container {
  display: flex;
  justify-content: center;
  height: 200px;
  gap: 10px;

  > div {
    flex: 0 20 200px;
    border-radius: 0.5rem;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    box-shadow: 1px 5px 15px #1e0e3e;
    position: relative;
    overflow: hidden;

    &:nth-of-type(1) {
      background: url("https://images.pexels.com/photos/29351977/pexels-photo-29351977/free-photo-of-elegant-bride-in-traditional-indian-attire.jpeg?auto=compress&cs=tinysrgb&w=1200")
        no-repeat 25% / cover;
    }
    &:nth-of-type(2) {
      background: url("https://images.pexels.com/photos/30929008/pexels-photo-30929008/free-photo-of-traditional-indian-woman-in-ornate-jewelry.jpeg?auto=compress&cs=tinysrgb&w=1200")
        no-repeat 25% / cover;
    }
    &:nth-of-type(3) {
      background: url("https://images.pexels.com/photos/27118152/pexels-photo-27118152/free-photo-of-portrait-of-a-bengali-bride-performing-hindu-wedding.jpeg?auto=compress&cs=tinysrgb&w=1200")
        no-repeat 25% / cover;
    }
    &:nth-of-type(4) {
      background: url("https://images.pexels.com/photos/25655890/pexels-photo-25655890/free-photo-of-woman-standing-in-traditional-clothing-and-with-jewelry.jpeg?auto=compress&cs=tinysrgb&w=1200")
        no-repeat 25% / cover;
    }

    .content {
      font-size: 1.5rem;
      color: #fff;
      display: flex;
      align-items: center;
      opacity: 0;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
      background: rgb(2, 2, 46);
      background: linear-gradient(
        0deg,
        rgba(2, 2, 46, 0.6755077030812324) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: translatey(100%);
      transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s;
      visibility: hidden;
        
      span {
        display: block;
        margin-top: 5px;
        font-size: 1.2rem;
      }
      
    }
    &:hover {
      flex: 0 0 250px;
      box-shadow: 1px 3px 15px #f5ea16;
      transform: translatey(-30px);
      background-position:center 20% ;
    }

    &:hover .content {
      opacity: 1;
      transform: translatey(0%);
      visibility: visible;
    }
  }
}
}
</style>

<script >

class StickyNavigation {

    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.et-hero-tab').click(function() { 
            self.onTabClick(event, $(this)); 
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }
    
    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }
    
    onScroll() {
        this.checkTabContainerPosition();
    this.findCurrentTabSelector();
    }
    
    onResize() {
        if(this.currentId) {
            this.setSliderCss();
        }
    }
    
    checkTabContainerPosition() {
        let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
        if($(window).scrollTop() > offset) {
            $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
        } 
        else {
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
        }
    }
    
    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.et-hero-tab').each(function() {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if(this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }
    
    setSliderCss() {
        let width = 0;
        let left = 0;
        if(this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.et-hero-tab-slider').css('width', width);
        $('.et-hero-tab-slider').css('left', left);
    }
    
}

$(document).ready(function(){
    new StickyNavigation();
  });  

export default {
  name: 'CardSection',
  computed: {
    cards(){
      return this.$store.state.Cards;
    }
  },
  created(){
    this.$store.dispatch('fetchProducts');
  }, 
};



</script>


