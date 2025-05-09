<template>
  <div class="flex h-screen bg-[#F6F7F9]">
    <GeneralSidebar :is-open="isOpen" />
    <div
      class="flex-grow flex flex-col transition-all duration-150"
      :class="[isOpen ? 'ml-0' : '-ml-[250px]']"
    >
      <GeneralHeader @update:open="isOpen = !isOpen" />
      <div class="flex-grow min-h-0 overflow-y-auto p-5 w-full">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GeneralHeader from '../general/general_header/GeneralHeader.vue'
import GeneralSidebar from '../general/general_sidebar/GeneralSidebar.vue'

const isOpen = ref(true)
</script>
