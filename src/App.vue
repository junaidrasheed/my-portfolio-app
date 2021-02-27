<template>
  <div id="app" class="md:flex">
    <div id="nav">
      <Navigation/>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="w-full my-16 mx-8">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>
