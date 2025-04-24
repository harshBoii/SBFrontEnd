<template>
    
<div id="tsparticles">
<div class="parchment">
    <h1>Contact Us</h1>
    <div class="desc">
      We would love to hear from you.<br>
      Send us your queries, feedback related to Our Brand or stories inspired by the golden heritage of ancient India.
    </div>
    <form>
      <div>
        <label for="name">Your Name</label><br>
        <input type="text" id="name" name="name" required autocomplete="off">
      </div>
      <div>
        <label for="email">Email Address</label><br>
        <input type="email" id="email" name="email" required autocomplete="off">
      </div>
      <div>
        <label for="message">Message</label><br>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
</div>
  </template>

  <style scoped>
  body {
      background: #eadece;
      margin: 0;
      min-height: 100vh;
      background: radial-gradient(ellipse at center, #fffbe8 0%, #f3e7c2 100%);
    }
    .parchment {
      max-width: 600px;
      margin: 3rem auto;
      padding: 2.5rem 2rem;
      background: #fffef0;
      border-radius: 18px;
      box-shadow:
        0 4px 40px #8f5922,
        0 0 0 12px #f3e7c2,
        0 0 0 16px #bfa14a44 inset,
        2px 3px 20px #0008,
        0 0 125px #8f592233 inset;
      font-family: 'Bilbo Swash Caps', 'Georgia', serif;
      position: relative;
      overflow: hidden;
    }
    .parchment:before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      pointer-events: none;
      background: url('https://www.transparenttextures.com/patterns/old-mathematics.png');
      opacity: 0.15;
      mix-blend-mode: multiply;
    }
    h1 {
      font-family: 'Pirata One', 'Georgia', serif;
      text-align: center;
      color: #bfa14a;
      font-size: 3.2rem;
      margin-bottom: 0.5em;
      letter-spacing: 2px;
    }
    .desc {
      color: #8c6f29;
      text-align: center;
      font-size: 2.1rem;
      margin-bottom: 2rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      z-index: 1;
      position: relative;
    }
    label {
      font-family: 'Bilbo Swash Caps', 'Georgia', serif;
      color: #bfa14a;
      font-size: 1.6rem;
      margin-bottom: 0.2rem;
      letter-spacing: 1px;
      width: 100%;
    }
    input, textarea {
      font-family: 'Georgia', serif;
      background: #f9f6f2;
      border: 1.5px solid #bfa14a;
      border-radius: 7px;
      padding: 0.7em 1em;
      font-size: 1rem;
      color: #8c6f29;
      outline: none;
      transition: border 0.2s;
      box-shadow: 0 1px 6px #bfa14a22 inset;
      width: 100%;
    }
    input:focus, textarea:focus {
      border: 2px solid #8c6f29;
      background: #fffbe8;
    }
    textarea {
      min-height: 90px;
      resize: vertical;
    }
    button {
      background: linear-gradient(90deg, #bfa14a 60%, #f3e7c2 100%);
      color: #fffef0;
      font-family: 'Pirata One', 'Georgia', serif;
      border: none;
      border-radius: 8px;
      padding: 0.8em 1.8em;
      font-size: 1.2rem;
      letter-spacing: 1px;
      cursor: pointer;
      box-shadow: 0 2px 8px #bfa14a55;
      margin-top: 0.5em;
      transition: background 0.2s, box-shadow 0.2s;
    }
    button:hover {
      background: linear-gradient(90deg, #8c6f29 60%, #bfa14a 100%);
      box-shadow: 0 4px 16px #8c6f2955;
    }
    @media (max-width: 650px) {
      .parchment {
        padding: 1.2rem 0.5rem;
      }
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