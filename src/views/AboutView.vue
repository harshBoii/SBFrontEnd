<template>
  <div class="about">
    <h1>{{about.name}}</h1>
    <p>{{about.description}}</p>
    <p>{{about.price}}</p>
    <p>{{about.quantity}}</p>
  </div>
</template>

<script>
export default{
    computed:{
      about(){
        return this.$store.getters.getProductById(this.$route.params.id)
      }
    }

}
</script>  