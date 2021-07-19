<template>
  <section-container background="white">
    <heading size="lg">My Recent Works.</heading>
    <div></div>
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
      projects: [
        {
          title: "Cointelegraph Markets Pro",
          image: "",
          shortDescription: "",
          longDescription: "",
          tools: [],
          link: "",
          type: "Professional",
          reponsibilities: [],
        },
        {
          title: "TheTIE Vision",
          image: "",
          shortDescription: "",
          longDescription: "",
          tools: [],
          link: "",
          type: "Professional",
          reponsibilities: [],
        },
        {
          title: "TheTIE Vision API",
          image: "",
          shortDescription: "",
          longDescription: "",
          tools: [],
          link: "",
          type: "Professional",
          reponsibilities: [],
        },
        {
          title: "Healthcare Business Insights (HBI)",
          image: "",
          shortDescription: "",
          longDescription: "",
          tools: [],
          link: "",
          type: "Professional",
          reponsibilities: [],
        },
      ],
    };
  },
};
</script>
