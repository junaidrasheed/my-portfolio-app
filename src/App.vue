<template>
  <div id="app" class="h-full">
    <navigation />
    <home />
    <about />
    <expertise />
    <skills />
    <recent-work />
    <hobbies />
    <recent-blogs />
    <contact />
    <page-footer />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Expertise from "./views/Expertise.vue";
import Skills from "./views/Skills.vue";
import RecentWork from "./views/RecentWork.vue";
import Hobbies from "./views/Hobbies.vue";
import RecentBlogs from "./views/RecentBlogs.vue";
import Contact from "./views/Contact.vue";
import PageFooter from "./views/Footer.vue";
export default {
  components: {
    Navigation,
    Home,
    About,
    Expertise,
    Skills,
    RecentWork,
    Hobbies,
    RecentBlogs,
    Contact,
    PageFooter,
  },
};
</script>
