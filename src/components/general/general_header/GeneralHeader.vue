<template>
  <div
    className="min-h-[60px] w-full bg-white flex items-center justify-between px-5 border-b border-slate-100"
  >
    <div
      className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center"
      @click="emit('update:open')"
    >
      <MenuIcon />
    </div>
    <div className="flex gap-4">
      <div
        className="w-10 h-10 rounded-full bg-slate-100 !text-slate-600 flex items-center justify-center"
        @click="goProfilePage"
      >
        <UserIcon />
      </div>
      <div
        className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center"
        @click="logoutHandler"
      >
        <LogOutIcon />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { UserIcon, MenuIcon, LogOutIcon } from 'lucide-vue-next'

const router = useRouter()

const emit = defineEmits(['update:open'])

const logoutHandler = () => {
  router.push('/')
  localStorage.clear()
}

const goProfilePage = () => {
  router.push({ name: 'ProfilePage' })
}
</script>
