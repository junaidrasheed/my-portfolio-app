<template>
  <section-container background="gray">
    <heading size="xl">My Awesome Expertise!</heading>
    <div class="md:flex space-y-4 md:space-x-8 md:space-y-0 justify-center">
      <expertise-card
        v-for="(item, idx) in expertise"
        :key="idx"
        :expertise="item"
        class="w-full md:w-1/3 md:max-w-sm"
      />
    </div>
  </section-container>
</template>
<script>
import SectionContainer from "../components/SectionContainer.vue";
import Heading from "../components/Heading.vue";
import ExpertiseCard from "../components/ExpertiseCard.vue";

export default {
  components: {
    SectionContainer,
    Heading,
    ExpertiseCard,
  },
  data() {
    return {
      expertise: [
        {
          title: "Backend",
          icon: "BackendSVG",
          description:
            "Experienced in PHP/Laravel Framework, with working knowledge of Ruby on Rails.",
        },
        {
          title: "Fontend",
          icon: "FrontendSVG",
          description:
            "Hands on experience of working with Vue.js frontend framework along side Tailwind CSS for UI designs.",
        },
        {
          title: "API Development",
          icon: "ApiSVG",
          description:
            "Working knowledge of API development using Laravel framework for multiple projects.",
        },
      ],
    };
  },
};
</script>
