<template>
  <div class="profile-bg">
    <div class="bg-opacity-80 bg-gray-900 h-full text-white">
      <div class="flex flex-col justify-center items-center h-full">
        <p class="text-6xl font-bold">{{ name }}</p>
        <p class="text-lg" v-html="designation"></p>
      </div>
      <div class="text-center -mt-20">
        <bouncing-arrow @click="scrollDown()" />
      </div>
    </div>
  </div>
</template>
<script>
import BouncingArrow from "../components/BouncingArrow.vue";
export default {
  components: {
    BouncingArrow,
  },
  data() {
    return {
      name: "Junaid Rasheed",
      designation: "<b>W</b>eb - <b>D</b>eveloper",
    };
  },
  methods: {
    scrollDown() {
      window.scroll({
        top: 900,
        behavior: "smooth",
      });
    },
  },
};
</script>
