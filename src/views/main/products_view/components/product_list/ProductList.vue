<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <product-card v-for="item in data" :key="item.id" :product="item" />
  </div>
</template>

<script setup lang="ts">
import ProductCard from '../product_card/ProductCard.vue'

defineProps(['data'])
</script>
