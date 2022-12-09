<script setup>
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps(['markdown'])

const markdowntohtml = computed(() => {
    return marked.parse(props.markdown);
});
</script>

<template>
    <div v-html="markdowntohtml"></div>
</template>