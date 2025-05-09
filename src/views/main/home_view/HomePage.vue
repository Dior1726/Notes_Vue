<template>
  <div>
    <h3 className="text-xl font-semibold mb-4">Posts page</h3>
    <div v-if="isLoading" className="flex justify-center items-center">Loading...</div>
    <div v-if="data" className="grid grid-cols-3 gap-5">
      <PostCard v-for="post in data.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getPosts } from './api/get_posts'
import PostCard from './components/post_card/PostCard.vue'

const { data, isLoading } = useQuery({
  queryKey: ['get_posts'],
  queryFn: () => getPosts(),
})
</script>
