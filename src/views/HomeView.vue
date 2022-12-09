<script setup>
import { computed, onMounted, ref } from "vue"
import { usePostStore } from "../stores/post"
import QuestionnerCard from "../components/QuestionnerCard.vue"

const store = usePostStore()

onMounted(() => {
  store.fetchPosts()
})
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Questionner Blog</h2>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </div> 
      <div class="grid gap-8 lg:grid-cols-2">
        <QuestionnerCard v-for="post in store.posts" :key="post.id" :id="post.id" :title="post.title" />
      </div>  
  </div>
</section>
</template>
