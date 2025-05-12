<template>
  <div v-if="isLoading" class="flex justify-center items-center">Loading...</div>
  <div v-if="data">
    <div className="text-xl mb-5 font-semibold">My Profile</div>
    <profile-card :profile="data" />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getProfile } from './api/get_profile'
import ProfileCard from './components/profile_card/ProfileCard.vue'

const { data, isLoading } = useQuery({
  queryKey: ['get_profile'],
  queryFn: () => getProfile(),
})
</script>
