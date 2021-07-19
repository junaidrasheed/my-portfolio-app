<template>
  <section-container background="black" class="text-gray-100">
    <heading size="lg">My Key Skills.</heading>
    <div class="flex flex-wrap -mx-12 overflow-hidden px-24 justify-center">
      <div
        class="my-4 px-12 w-full overflow-hidden md:w-1/3 text-left"
        v-for="(skill, idx) in skills"
        :key="idx"
      >
        <span class="text-sm tracking-widest">{{ skill.name }}</span>
        <div class="shadow w-full bg-truegray-500 rounded-full mt-5">
          <div
            class="bg-truegray-200 text-xs rounded-full leading-none py-1 text-center text-white"
            :style="`width: ${getSkillPercentage(skill.value)}%`"
          ></div>
        </div>
      </div>
    </div>
  </section-container>
</template>
<script>
import SectionContainer from "../components/SectionContainer.vue";
import Heading from "../components/Heading.vue";
export default {
  components: {
    SectionContainer,
    Heading,
  },
  data() {
    return {
      skills: [
        { name: "Laravel", value: 5 },
        { name: "Vue.js", value: 5 },
        { name: "Tailwind CSS", value: 4 },
        { name: "Ruby on Rails", value: 3 },
        { name: "MySQL / Postgres", value: 4 },
        { name: "Git", value: 5 },
        { name: "Linux", value: 4 },
      ],
    };
  },
  methods: {
    getSkillPercentage(rating) {
      const maxRating = 5;
      return (rating / maxRating) * 100;
    },
  },
};
</script>
