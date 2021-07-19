<template>
  <div class="hidden md:block fixed top-14 right-72">
    <div class="flex space-x-2">
      <div v-if="active" class="flex items-center">
        <div class="bg-black py-1 px-8 space-x-8">
          <a
            v-for="(item, idx) in links"
            :href="item.link"
            :key="idx"
            class="text-gray-200 hover:text-white text-sm tracking-wide"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
      <nav-button @active="active = $event" />
    </div>
  </div>
</template>
<script>
import NavButton from "./NavButton.vue";
export default {
  components: {
    NavButton,
  },
  data() {
    return {
      active: false,
      links: [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Work", link: "#work" },
        { name: "Blog", link: "#blog" },
        { name: "Contact", link: "#contact" },
      ],
      activeLink: 0,
    };
  },
};
</script>
<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
