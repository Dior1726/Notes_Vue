<template>
  <div
    class="max-w-[250px] w-full bg-white pt-0 border-r border-slate-100 transition-all duration-150 transform"
    :class="[isOpen ? 'translate-x-0' : '-translate-x-full']"
  >
    <div class="min-h-[60px] flex items-center justify-center font-bold text-indigo-500 text-2xl">
      NOTES
    </div>
    <div class="flex flex-col p-5">
      <router-link :to="{ name: 'HomePage' }" class="flex items-center gap-2 px-5 py-3">
        <NotebookIcon />
        <div>All Posts</div>
      </router-link>
      <router-link :to="{ name: 'TodosPage' }" class="flex items-center gap-2 px-5 py-3">
        <ListCheckIcon />
        <div>Todos</div>
      </router-link>
      <router-link :to="{ name: 'ProductsPage' }" class="flex items-center gap-2 px-5 py-3">
        <ShoppingCartIcon />
        <div>Products</div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShoppingCartIcon, NotebookIcon, ListCheckIcon } from 'lucide-vue-next'

defineProps(['isOpen'])
</script>
