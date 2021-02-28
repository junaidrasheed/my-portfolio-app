<template>
  <div id="app" class="md:flex text-gray-800">
    <div id="nav">
      <Navigation/>
    </div>
    <div class="w-full h-screen py-16 px-2 md:px-8">
      <About/>
    </div>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
import About from './views/About'
export default {
  components: {
    Navigation,
    About
  }
}
</script>
