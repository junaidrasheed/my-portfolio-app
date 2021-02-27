<template>
    <div class="md:h-screen md:flex md:sticky md:left-0">
        <div class="flex md:flex-col items-center justify-center">
            <div v-for="(link, idx) in links" :key="idx" 
                :class="{ 'border-r md:border-b md:border-r-0 border-gray-200' : idx < (links.length - 1) }"
                class="flex flex-col justify-center w-20 h-20 bg-white hover:text-green-500 cursor-pointer transform hover:scale-125 hover:shadow-md transition ease-linear">
                <div class="text-center p-2">
                    <div class="" v-html="link.icon"></div>
                    <span class="uppercase text-xs">{{ link.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            links: [
                { name: 'About', icon: '<svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>'},
                { name: 'Skill', icon: '<svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />'},
                { name: 'Resume', icon: '<svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />'},
                { name: 'Work', icon: '<svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'},
            ]
        }
    }
}
</script>