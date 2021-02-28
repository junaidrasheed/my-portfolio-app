<template>
    <div class="py-6 px-8 border-b">
        <span class="text-2xl font-bold">
        <span class="text-red-500">{{ highlighted }}</span> {{ remaining }}
        </span>
    </div>
</template>
<script>
export default {
    props: ['title'],
    computed: {
        highlighted () {
            return this.title.split(" ")[0]
        },
        remaining () {
            return this.title.replace(this.highlighted, "")
        }
    }
}
</script>