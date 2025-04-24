<template><section id="about-us" style="font-family: 'Georgia', serif; background: #f9f6f2; padding: 2rem;">
    <div style="max-width: 800px; margin: auto;">
      <h1 style="text-align: center; color: #bfa14a;">About Us</h1>
      
      <h2 style="color: #8c6f29;">Embodying the Timeless Splendor of Ancient India</h2>
      <p>
        Welcome to our gold jewellery e-commerce platform, where every piece is a tribute to the grandeur and heritage of ancient India. Our journey is inspired by a civilization that has cherished gold not only as a symbol of wealth and prestige but as an integral part of its spiritual, social, and artistic expression for over 5,000 years.
      </p>
      
      <h3 style="color: #bfa14a;">Our Heritage</h3>
      <p>
        Gold in ancient India was revered as <strong>“swarna”</strong>, representing the brilliance of the sun, the purity of fire, and the blessings of the goddess Lakshmi—the deity of wealth and prosperity. From the royal courts of the Maharajas to the bustling bazaars of ancient cities, gold jewellery adorned kings, queens, and commoners alike, marking every significant occasion, from weddings and festivals to religious ceremonies.
      </p>
      
      <h3 style="color: #bfa14a;">Inspired by Nature and Divinity</h3>
      <p>
        Our collections draw inspiration from the motifs and craftsmanship of ancient Indian goldsmiths, who skillfully depicted elements of nature—animals, trees, leaves, and flowers—in their designs. Many of our pieces also echo the divine, featuring intricate representations of gods and goddesses such as Lakshmi, Ganesha, and Hanuman, just as artisans did centuries ago.
      </p>
      
      <h3 style="color: #bfa14a;">Craftsmanship Rooted in Tradition</h3>
      <p>
        We honor the techniques passed down through generations—granulation, wirework, and engraving—that have defined Indian jewellery since the days of the Indus Valley Civilization. Our artisans blend these time-honored methods with contemporary finesse, ensuring each creation is both a work of art and a piece of history.
      </p>
      
      <h3 style="color: #bfa14a;">A Legacy of Celebration</h3>
      <p>
        In Indian culture, gold jewellery is more than ornamentation; it is a cherished heirloom, a symbol of prosperity, and a bearer of blessings for generations to come. Our mission is to make this legacy accessible to all, offering exquisite pieces that celebrate the richness of our past while embracing the elegance of the present.
      </p>
      
      <h3 style="color: #bfa14a;">Why Choose Us?</h3>
      <ul>
        <li><strong>Authenticity:</strong> Each piece is crafted with purity and precision, reflecting the ancient traditions of Indian goldsmiths.</li>
        <li><strong>Cultural Resonance:</strong> Our designs are steeped in the symbolism and artistry of ancient India, connecting you to a timeless legacy.</li>
        <li><strong>Sustainable Craft:</strong> We are committed to ethical sourcing and the revival of traditional craftsmanship, supporting artisans and their communities.</li>
        <li><strong>Personal Connection:</strong> Whether for a wedding, a festival, or a personal milestone, our jewellery is designed to become a treasured part of your story.</li>
      </ul>
      
      <h3 style="color: #bfa14a;">Join Our Journey</h3>
      <p>
        Discover the allure of ancient India with us. Celebrate your moments with jewellery that carries the spirit of a civilization—where every piece tells a story, and every story is woven with gold.
      </p>
      
      <blockquote style="margin-top:2rem; color: #8c6f29; font-style: italic; border-left: 4px solid #bfa14a; padding-left: 1rem;">
        Step into a world where tradition meets elegance, and let your adornment echo the splendor of India’s golden past.
      </blockquote>
    </div>
  </section>
  </template>

<style scoped>

body{
    background-color:#fbeddb ;
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

</script>