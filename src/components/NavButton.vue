<template>
  <button
    class="w-10 outline-none focus:outline-none"
    :class="active ? '' : 'space-y-2'"
    @click.prevent="toggle"
  >
    <div
      :class="active ? 'skew-y-25' : ''"
      class="transform border border-gray-900 duration-100 ease-linear"
    ></div>
    <div v-if="!active" class="border border-gray-900"></div>
    <div
      :class="active ? '-skew-y-25' : ''"
      class="transform  border border-gray-900 duration-100 ease-linear"
    ></div>
  </button>
</template>
<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
      this.$emit("active", this.active);
    },
  },
};
</script>
