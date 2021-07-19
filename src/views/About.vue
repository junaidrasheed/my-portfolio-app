<template>
  <section-container background="white" max-width="2xl">
    <heading size="lg">Who am I?</heading>
    <p class="text-md tracking-wide font-thin text-gray-900">
      Hello, I am <span class="font-bold">Junaid</span>, a {{ age }} years old
      Web Developer from Lahore, Pakistan offering {{ experience }}+ years of
      professional experience in LAMP stack development. With major expertise in
      backend development using popular frameworks like PHP-Laravel and Ruby on
      Rails, I have also developed a likeness towards frontend development using
      Vue.js and Tailwind CSS.
    </p>
    <div class="flex space-x-8 mt-8 mb-4 justify-center">
      <a
        :href="social.link"
        target="blank"
        v-for="(social, idx) in socials"
        :key="idx"
      >
        <img :src="social.icon" class="w-5 h-5 inline" />
      </a>
    </div>
  </section-container>
  <!-- <div class="md:flex h-full">
    <ProfileCard class="w-full max-w-sm md:shadow-2xl"/>
    <div class="w-full md:w-3/4 bg-white my-8 rounded md:rounded-l-none md:rounded-r overflow-y-auto">
      <div id="about">
        <Heading title="About Me"/>
        <div class="md:flex space-y-4 md:space-x-24 py-12 px-8">
          <div class="w-full md:w-1/2">
            <p>Hi, I'm a {{ age }} years old professional software developer with hands on experience of working effectively in dynamic environments. Offering {{ experience }}+ years of experience
              in web development technologies, I am an efficient team player focused on achieving project objectives with speed and accuracy.
            </p>
          </div>
          <div class="flex flex-col space-y-4 w-full md:w-1/2">
            <div class="flex justify-between">
              <span class="block tag">Age......</span>
              <span class="block">{{ age }}</span>
            </div>
            <div class="flex justify-between">
              <span class="block tag">Country......</span>
              <span class="block">Pakistan</span>
            </div>
            <div class="flex justify-between">
              <span class="block tag">Remote Work......</span>
              <span class="block">Available</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Heading title="Main Domains"/>
        <div class="md:flex space-y-8 md:space-y-0 md:space-x-24 py-12 px-8">
          <div class="w-full md:w-1/3 text-center" v-for="(domain,idx) in mainDomains" :key="idx">
            <div class="flex items-center justify-center mx-auto rounded-full bg-red-500 w-20 h-20" v-html="domain.icon"></div>
            <h1 class="my-4 text-xl">{{ domain.title }}</h1>
            <p>{{ domain.description }}</p>
          </div>
        </div>
      </div>
      <div id="skill">
        <Heading title="Skills, Tools & Interests"/>
        <div class="md:flex space-y-8 md:space-y-0 md:space-x-24 py-12 px-8">
          <div class="w-full md:w-1/2">
            <div class="space-y-2">
              <div class="flex justify-between" v-for="(skill,idx) in skills" :key="idx">
                <div>{{ skill.name }}</div>
                <div class="flex space-x-2">
                  <div v-for="i in skill.value" :key="'filled-'+i" class="w-5 h-5 rounded-full bg-red-500"></div>
                  <div v-for="i in (5-skill.value)" :key="'unfilled-'+i" class="w-5 h-5 rounded-full bg-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div>
              <h1 class="text-xl">Tools</h1>
              <div class="flex my-4">

              </div>
            </div>
            <div>
              <h1 class="text-xl">Interests</h1>
              <div class="flex flex-wrap -mx-1 mt-2 overflow-hidden">
                <div v-for="(interest, idx) in interests" :key="idx" class="px-1 overflow-hidden">
                  <span class="tag">{{ interest }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="resume">
        <Heading title="Resume"/>
        <div class="flex flex-col items-center justify-center py-10 md:py-20">
          <img class="w-20 h-20 text-red-500 cursor-pointer" src="../assets/pdf.svg"/>
          <p class="my-2 mx-4 text-center">If you are a recruiter, feel free to get in touch!</p>
        </div>
      </div>
      <div id="work">
        <Heading title="Work Experience"/>
        <div class="md:flex space-y-8 md:space-y-0 md:space-x-24 py-12 px-8">
          <p>Over the years, I have been part of various projects both professional and academic. Some of those have been highlighted below.</p>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
// import ProfileCard from "../components/ProfileCard";
import SectionContainer from "../components/SectionContainer.vue";
import Heading from "../components/Heading.vue";
import Facebook from "../assets/icons/facebook.png";
import Github from "../assets/icons/github.png";
import Instagram from "../assets/icons/instagram.png";
import LinkedIn from "../assets/icons/linkedin.png";
import Twitter from "../assets/icons/twitter.png";

export default {
  components: {
    // ProfileCard,
    SectionContainer,
    Heading,
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    age() {
      return this.currentYear - 1996;
    },
    experience() {
      return this.currentYear - 2017;
    },
  },
  data() {
    return {
      socials: [
        { icon: Github, link: "#" },
        { icon: LinkedIn, link: "#" },
        { icon: Instagram, link: "#" },
        { icon: Twitter, link: "#" },
        { icon: Facebook, link: "#" },
      ],
      tools: ["vscode", "github", "dbeaver"],
      interests: [
        "Computer Gaming",
        "Drawing",
        "Hiking",
        "Netflix",
        "Travelling",
      ],
    };
  },
};
</script>
