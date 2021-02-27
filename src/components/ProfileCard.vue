<template>
    <div class="bg-white rounded">
        <img src="../assets/profile.png" class="bg-cover w-full rounded"/>
        <div class="my-4 text-center">
            <p class="mt-8 mb-2 text-4xl font-bold ">Junaid Rasheed</p>
            <p class="my-2 text-xl text-green-500">Software Developer</p>
        </div>
        <div class="my-4 flex items-center flex-shrink-0 justify-center">
            <a v-for="(social, idx) in socialLinks" :key="idx"  :href="social.link">
                <img class="w-5 h-5 mx-1" :title="social.name" :src="require(`@/assets/icons/${social.icon}`)"/>
            </a>
        </div>
        <div class="flex">
            <div class="w-1/2">
                <button class="uppercase hover:text-green-500 border-r border-gray-300">Download CV</button>
            </div>
            <div class="w-1/2">
                <button class="uppercase">Contact Me</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            socialLinks: [
                { name: 'Github', link: '#', icon: 'github.png'},
                { name: 'LinkedIn', link: '#', icon: 'linkedin.png'},
                { name: 'Instagram', link: '#', icon: 'instagram.png'},
                { name: 'Twitter', link: '#', icon: 'twitter.png'},
                { name: 'Facebook', link: '#', icon: 'facebook.png'}
            ]
        }
    }
}
</script>