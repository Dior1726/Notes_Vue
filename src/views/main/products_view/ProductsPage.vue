<template>
  <div v-if="isLoading" class="flex justify-center items-center">Loading...</div>
  <div v-if="data">
    <div className="text-xl mb-5 font-semibold">Products page</div>
    <product-list :data="data.products" />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getProducts } from './api/get_products'
import ProductList from './components/product_list/ProductList.vue'

const { data, isLoading } = useQuery({
  queryKey: ['get_products'],
  queryFn: () => getProducts(),
})
</script>
