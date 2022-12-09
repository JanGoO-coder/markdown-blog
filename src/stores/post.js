import { ref } from "vue";
import { defineStore } from "pinia"
import db from "../firebase/index.js"
import { collection, query, getDocs, where, doc, getDoc } from "firebase/firestore"

export const usePostStore = defineStore("post", () => {
  const posts = ref([])

  async function fetchPosts() {
    const q = query(collection(db, "posts"))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      const post = {
        "id": doc.id,
        "title": data.title,
        "content": data.content,
        "created_at": data.created_at,
        "updated_at": data.updated_at
      }
      posts.value.push(post)
    })
  }

  return { posts, fetchPosts }
})
