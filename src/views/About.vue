<template>
  <div class="md:flex h-full">
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
  </div>
</template>
<script>
import ProfileCard from '../components/ProfileCard'
import Heading from '../components/Heading'
export default {
  components: {
    ProfileCard,
    Heading
  },
  computed: {
    currentYear(){
      return new Date().getFullYear()
    },
    age() {
      return ( this.currentYear - 1996)
    },
    experience() {
      return this.currentYear - 2017
    }
  },
  data () {
    return {
      mainDomains: [
        { 
          title: 'Fontend Dev', 
          description: 'Hands on experience of working with Vue.js frontend framework along side Tailwind CSS for UI designs.', 
          icon: '<svg class="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
        },
        { 
          title: 'Backend Dev', 
          description: 'Experienced in PHP/Laravel Framework, with working knowledge of Ruby on Rails.', 
          icon: '<svg class="w-10 h-10 text-white" fill="currentColor" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22.25 20h-20.5c-.965 0-1.75-.785-1.75-1.75v-12.5c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v12.5c0 .965-.785 1.75-1.75 1.75zm-20.5-14.5c-.138 0-.25.112-.25.25v12.5c0 .138.112.25.25.25h20.5c.138 0 .25-.112.25-.25v-12.5c0-.138-.112-.25-.25-.25z"/><path d="m16.25 24h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m12 24c-.414 0-.75-.336-.75-.75v-4c0-.414.336-.75.75-.75s.75.336.75.75v4c0 .414-.336.75-.75.75z"/><path d="m15.25 14.5c-.173 0-.346-.059-.488-.181-.314-.27-.351-.743-.081-1.058l1.081-1.261-1.082-1.262c-.27-.314-.233-.788.081-1.058.315-.27.788-.233 1.058.081l1.5 1.75c.241.281.241.695 0 .977l-1.5 1.75c-.148.173-.358.262-.569.262z"/><path d="m8.75 14.5c-.211 0-.421-.089-.57-.262l-1.5-1.75c-.241-.281-.241-.695 0-.977l1.5-1.75c.27-.313.743-.351 1.058-.08.314.27.351.743.081 1.058l-1.081 1.261 1.082 1.262c.27.314.233.788-.081 1.058-.142.12-.316.18-.489.18z"/><path d="m11.25 16c-.056 0-.112-.006-.169-.019-.404-.093-.655-.496-.563-.899l1.5-6.5c.093-.403.495-.654.899-.563.404.093.655.496.563.899l-1.5 6.5c-.079.348-.388.582-.73.582z"/></svg>' 
        },
        { 
          title: 'API Development', 
          description: 'Working knowledge of API development using Laravel framework for multiple projects.', 
          icon: '<svg class="w-8 h-8 text-white" fill="currentColor" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m504.971 239.029-56.971-56.97v-98.059c0-46.317-37.682-84-84-84h-44c-13.255 0-24 10.745-24 24s10.745 24 24 24h44c19.851 0 36 16.149 36 36v108c0 6.365 2.529 12.47 7.029 16.971l47.03 47.029-47.029 47.029c-4.501 4.501-7.03 10.606-7.03 16.971v108c0 19.851-16.149 36-36 36h-44c-13.255 0-24 10.745-24 24s10.745 24 24 24h44c46.318 0 84-37.683 84-84v-98.059l56.971-56.971c9.372-9.372 9.372-24.568 0-33.941z"/><path d="m112 192v-108c0-19.851 16.149-36 36-36h44c13.255 0 24-10.745 24-24s-10.745-24-24-24h-44c-46.318 0-84 37.683-84 84v98.059l-56.971 56.97c-9.373 9.373-9.373 24.568 0 33.941l56.971 56.971v98.059c0 46.317 37.682 84 84 84h44c13.255 0 24-10.745 24-24s-10.745-24-24-24h-44c-19.851 0-36-16.149-36-36v-108c0-6.365-2.529-12.47-7.029-16.971l-47.03-47.029 47.029-47.029c4.501-4.501 7.03-10.606 7.03-16.971z"/></svg>' 
        },
      ],
      skills: [
        { name: 'Laravel', value: 5 },
        { name: 'Tailwind CSS', value: 4 },
        { name: 'Ruby on Rails', value: 3 },
        { name: 'MySQL / Postgres', value: 4 },
        { name: 'JS / Jquery', value: 3 },
        { name: 'Git', value: 5 },
        { name: 'Websockets', value: 4 },
        { name: 'Linux', value: 4 },
        { name: 'AWS', value: 3 },
      ],
      tools: [ 'vscode', 'github', 'dbeaver'],
      interests: ['Computer Gaming', 'Drawing', 'Hiking', 'Netflix', 'Travelling'],
      projects: [
        {
          title: 'Cointelegraph Markets Pro',
          image: '',
          shortDescription: '',
          longDescription: '',
          tools: [],
          link: '',
          type: 'Professional',
          reponsibilities: [

          ]
        },
        {
          title: 'TheTIE Vision',
          image: '',
          shortDescription: '',
          longDescription: '',
          tools: [],
          link: '',
          type: 'Professional',
          reponsibilities: [
            
          ]
        },
        {
          title: 'TheTIE Vision API',
          image: '',
          shortDescription: '',
          longDescription: '',
          tools: [],
          link: '',
          type: 'Professional',
          reponsibilities: [
            
          ]
        },
        {
          title: 'Healthcare Business Insights (HBI)',
          image: '',
          shortDescription: '',
          longDescription: '',
          tools: [],
          link: '',
          type: 'Professional',
          reponsibilities: [
            
          ]
        }

      ]
    }
  }
}
</script>