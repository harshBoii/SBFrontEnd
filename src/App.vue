<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { RouterView } from "vue-router";
import Welcome from "@/components/WelcomeItem.vue";
import Hello from "@/components/HelloWorld.vue";



const Height = ref(window.scrollY);

const handleScroll = () => {
  Height.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  console.log("mounted");
});

watch(Height, (newHeight) => {
  const leftElement = document.querySelector('.Left');
  const rightElement = document.querySelector('.Right');
  const totalHeight = document.body.scrollHeight
  if (totalHeight>1600){
    if (newHeight > 500) {
      leftElement.classList.add('show');
      rightElement.style.visibility = 'visible';
      rightElement.style.width = '96.5%';
      rightElement.style.backgroundColor = 'white';  
      rightElement.style.marginLeft = '3%';

    } else {
      leftElement.classList.remove('show');
      rightElement.style.width = '100%';
      rightElement.style.backgroundColor = 'black';
    }
  }
  else{
    leftElement.classList.add('show');
      rightElement.style.visibility = 'visible';
      rightElement.style.width = '96%';
      rightElement.style.backgroundColor = 'white';  
      rightElement.style.marginLeft = '3%';
  }
});
</script>

<template>
  <div class="Left">
    <Welcome />
  </div>
  <div class="Right">
    <RouterView />
  </div>
</template>

<style>
body {
  background-color: white;
  margin: 0;
}

.Left {
  position: fixed;
  float: left;
  width: 4%;
  height: 100%;
  z-index: 100;
  background-color: white;
  border-right: 1.5px outset;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 1s ease-out, opacity 2s ease-out;
  overflow: hidden;
  left: 0;
}

.Left.show {
  transform: translateX(5%);
  opacity: 1;
  visibility: visible;
}
.Left:hover {
  background-color:#F4F4F4;
}
.Right {
  float: right;
  height: 100%;
  width: 100%;
  background-color: white;
  color: black;
}

@media (max-width: 768px) {
  
    .Left {
  position: fixed;
  float: left;
  width: 15%;
  height: 100%;
  z-index: 100;
  background-color: white;
  border-right: 1.5px outset;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 1s ease-out, opacity 2s ease-out;
  overflow: hidden;
  left: 0;
}

.Left.show {
  transform: translateX(5%);
  opacity: 1;
  visibility: visible;
  }
}

</style>
