import { toast } from 'vue-sonner'
import { defineStore } from 'pinia'

interface PostState {
  posts: number[]
}

export const usePostStore = defineStore('post', {
  state: (): PostState => ({
    posts: [],
  }),
  actions: {
    addToFavorites(id: number) {
      if (this.posts.includes(id)) {
        this.posts = this.posts.filter((post) => post !== id)
        toast.success('Post removed from favorites')
      } else {
        this.posts.push(id)
        toast.success('Post added to favorites')
      }
    },
  },
})
