<template>
  <span
    :class="`text-${size}`"
    class="tracking-widest font-bold block pb-8 uppercase"
  >
    <slot />
  </span>
</template>
<script>
export default {
  props: ["size"],
};
</script>
