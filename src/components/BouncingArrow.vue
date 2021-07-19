<template>
  <svg
    @click="$emit('click')"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 text-gray-400 hover:text-white bounce inline cursor-pointer"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
    />
  </svg>
</template>
<style lang="postcss" scoped>
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
