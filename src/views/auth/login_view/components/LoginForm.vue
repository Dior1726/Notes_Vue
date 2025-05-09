<template>
  <div className="mt-10 flex flex-col gap-5">
    <Input
      placeholder="Username"
      className="h-10 px-2 rounded-sm border border-slate-200"
      v-model="user.username"
    />
    <Input
      placeholder="Password"
      className="h-10 px-2 rounded-sm border border-slate-200"
      v-model="user.password"
    />
    <Button
      className="bg-indigo-500 h-10 mt-5 w-full text-white rounded-md"
      :disabled="isPending"
      @click="mutate()"
    >
      Login
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMutation } from '@tanstack/vue-query'
import { loginHandler } from '../api/login_handler'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const router = useRouter()

const user = ref({
  username: 'jamesd',
  password: 'jamesdpass',
})

const { mutate, isPending } = useMutation({
  mutationFn: () => loginHandler(user.value),
  onSuccess: (data) => {
    for (const key in data) {
      localStorage.setItem(key, data[key])
    }
    router.push({ name: 'HomePage' })
  },
})
</script>
