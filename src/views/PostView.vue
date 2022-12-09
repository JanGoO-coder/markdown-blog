<script setup>
import { doc, getDoc } from '@firebase/firestore'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import QuestionnerPost from '../components/QuestionnerPost.vue'
import axios from "axios"
import db from "../firebase/index.js"

const route = useRoute()
const post = ref(null)
const link = ref("")
const content = ref("")

const fetchPost = async (id) => {
    const docRef = doc(db, "posts", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        post.value = docSnap.data()
        link.value = post.value.content
        getContent(link.value)
    }
}

const getContent = async (link) => {
  await axios.get(link)
  .then(response => {
    content.value = response.data
  })
  .catch(error => {
    console.log(link)
    console.log(error)
  })
}

onBeforeMount(() => {
    fetchPost(route.params.id)
})
</SCript>

<template>
    <QuestionnerPost :content="content" />
</template>