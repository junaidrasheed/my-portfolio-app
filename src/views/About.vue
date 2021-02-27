<template>
  <div class="md:flex h-full">
    <ProfileCard class="w-full md:w-1/4 md:shadow-xl"/>
    <div class="w-full md:w-3/4 bg-white my-8">
      This is content
    </div>
  </div>
</template>
<script>
import ProfileCard from '../components/ProfileCard'
export default {
  components: {
    ProfileCard
  }
}
</script>