<template>
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="max-w-lg bg-white rounded-3xl p-10 shadow-sm w-full">
      <h3 className="text-center text-2xl font-medium text-indigo-500">Welcome!</h3>
      <LoginForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './components/LoginForm.vue'
</script>
