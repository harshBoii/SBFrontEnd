<template>
  <div class="my-page">
    <header class="header">
      <h1 class="title">My Ancient Page</h1>
    </header>
    
    <main class="content">
      <section class="profile-section">
        <div class="profile-image">
          <img src="../assets/default-profile.jpg" alt="Profile" />
        </div>
        <div class="profile-info">
          <h2 class="profile-name">{{ this.user[0] ? user[0].email : 'No Email Available' }}</h2>
          <p class="profile-bio">{{ user[0] ? user[0].address : 'No Address Available' }}</p>

        </div>
      </section>
      
      <section class="stats-section">
        <div class="stat-card">
          <h3>Orders</h3>
          <p class="stat-number">0</p>
        </div>
        <div class="stat-card">
          <h3>Favorites</h3>
          <p class="stat-number">0</p>
        </div>
        <div class="stat-card">
          <h3>Reviews</h3>
          <p class="stat-number">0</p>
        </div>
      </section>
      
      <section class="actions-section">
        <button class="ancient-button" @click="LogOut">Remove</button>
        <button class="ancient-button">My Orders</button>
        <button class="ancient-button">Settings</button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  data() {
    return {
      
    }
  },
  mounted() {
    this.userCheck()
    this.$store.dispatch('getCart')
    console.log('Hi')
    console.log(this.user)
  },
  methods: {
    userCheck(){
        if (!localStorage.getItem('Token')){
            alert("Please Login First")
            this.$router.push('/login')
            return
        }

    },
    LogOut(){
        this.$store.commit('removeCart')
        alert("Come Back Soon")
        this.$router.push('/')
    }
  },
  computed:{
    user(){ return this.$store.state.Cart} 
  }
}
</script>

<style scoped>
.my-page {
  font-family: 'Italiana', serif;
  color: #2E294E;
  background-color: #f5f1e6;
  min-height: 100vh;
  padding: 20px;
  width:100vw;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d0c8a0' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.header {
  text-align: center;
  padding: 30px 0;
  border-bottom: 3px double #8b7d3a;
  margin-bottom: 30px;
}

.title {
  font-family: 'Italiana', serif;
  color: #8b7d3a;
  font-size: 48px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 3px;
  margin: 0;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
  background-color: rgba(255, 252, 240, 0.8);
  border: 1px solid #d3bc8d;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(139, 125, 58, 0.3);
}

.profile-section {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #d3bc8d;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #8b7d3a;
  margin-right: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  font-family: 'Italiana', serif;
  color: #2E294E;
  font-size: 32px;
  margin-bottom: 10px;
}

.profile-bio {
  font-family: 'Quicksand', sans-serif;
  color: #555;
  line-height: 1.6;
}

.stats-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #d3bc8d;
}

.stat-card {
  flex: 1;
  text-align: center;
  padding: 20px;
  margin: 0 10px;
  background-color: #f7f3e8;
  border: 1px solid #d3bc8d;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(139, 125, 58, 0.2);
}

.stat-card h3 {
  font-family: 'Italiana', serif;
  color: #8b7d3a;
  margin-bottom: 10px;
}

.stat-number {
  font-size: 36px;
  font-weight: bold;
  color: #2E294E;
}

.actions-section {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.ancient-button {
  align-items: center;
  appearance: none;
  background-color: #f7e256;
  border-radius: 4px;
  border: 2px solid #8b7d3a;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #fff56c 0 -3px 0 inset;
  box-sizing: border-box;
  color: #2E294E;
  cursor: pointer;
  display: inline-flex;
  font-family: "Italiana", serif;
  height: 48px;
  justify-content: center;
  line-height: 1;
  padding: 0 24px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}

.ancient-button:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #f7e256 0 -3px 0 inset;
  transform: translateY(-2px);
}

.ancient-button:active {
  box-shadow: #f7e256 0 3px 7px inset;
  transform: translateY(2px);
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-image {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .stats-section {
    flex-direction: column;
  }
  
  .stat-card {
    margin: 10px 0;
  }
  
  .actions-section {
    flex-direction: column;
  }
  
  .ancient-button {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
