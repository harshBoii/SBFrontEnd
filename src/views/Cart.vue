<template>
    <div id="Left">
        <RouterLink v-for="item in cart" :key="item.id" :to="{ name: 'CardDetails', params: { id: item.id }}">
            <div class="Desc">
                <h1>{{item.name}}</h1>
                <p>{{item.description}}</p>
                <p>Price: {{item.price}}</p>
                <p>Quantity: {{item.quantity}}</p>
                <p>More...</p>
            </div>
        </RouterLink>
    </div>
</template>

<script >
export default{

computed:{
cart(){
        return this.$store.state.cart
    }
}, 

created(){
    this.$store.dispatch('getCart')
}
 }
</script>

<style scoped>
body{
    background-color: rgb(255, 255, 255)
    ;
}
</style>