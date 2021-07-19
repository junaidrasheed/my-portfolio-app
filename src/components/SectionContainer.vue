<template>
  <div :class="[backgrounClass]" class="py-16 px-10">
    <div :class="[widthClass]" class="text-center mx-auto">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionContainer",
  props: {
    background: {
      type: String,
      default: "white",
    },
    maxWidth: {
      type: String,
      default: "full",
    },
  },
  computed: {
    backgrounClass() {
      return {
        gray: "bg-gray-100",
        white: "bg-white",
        black: "bg-gray-900",
      }[this.background];
    },
    widthClass() {
      return {
        full: "w-full",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
      }[this.maxWidth];
    },
  },
};
</script>
