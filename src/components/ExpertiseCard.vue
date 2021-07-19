<template>
  <div class="bg-white rounded shadow p-5">
    <component :is="expertise.icon" class="w-10 h-10 mx-auto my-8" />
    <span class="block text-sm font-bold tracking-wider text-center">
      {{ expertise.title }}
    </span>
    <p class="font-thin text-gray-900 my-4">
      {{ expertise.description }}
    </p>
  </div>
</template>
<script>
import ApiSVG from "../components/svg/API.vue";
import FrontendSVG from "../components/svg/Frontend.vue";
import BackendSVG from "../components/svg/Backend.vue";
export default {
  components: {
    ApiSVG,
    FrontendSVG,
    BackendSVG,
  },
  props: ["expertise"],
};
</script>
