<template>
  <div
    class="bg-white shadow-xs rounded-lg p-4 cursor-pointer hover:shadow-md transition-all duration-300"
  >
    <div class="flex items-center justify-center mb-2">
      <img width="200" height="auto" :src="product.thumbnail" />
    </div>
    <div>
      <h2 class="font-medium mb-1">{{ product.title }}</h2>
      <div class="text-xl font-bold flex items-center justify-between">
        <h2>$ {{ product.price }}</h2>
        <p class="text-sm font-light">{{ product.brand }}</p>
      </div>
    </div>
    <div class="flex items-center justify-between mt-2">
      <div class="flex gap-1 items-center text-sm font-bold">
        <StarIcon class="text-orange-300" />
        {{ product.rating }}
      </div>
      <div class="text-sm">
        Stock: <span class="font-bold">{{ product.stock }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from 'lucide-vue-next'

defineProps(['product'])
</script>
