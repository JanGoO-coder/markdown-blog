<script setup>
import { computed, onBeforeMount, onMounted, ref } from "vue"
import { marked } from "marked"

const props = defineProps(["content"])

const markdowntohtml = computed(() => {
    return marked.parse(props.content)
})
</script>

<template>
    <div v-html="markdowntohtml" class="prose lg:prose-xl"></div>
</template>