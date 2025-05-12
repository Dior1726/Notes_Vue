<template>
  <div v-if="isLoading" class="flex justify-center items-center">Loading...</div>
  <div v-if="data" class="">
    <div class="bg-white rounded-xl p-5 max-w-2xl mx-auto shadow-sm">
      <div class="flex items-center justify-between mb-5">
        <h1 class="text-xl font-semibold text-center">Todos</h1>
        <Button @click="isOpen = true">Add Todo</Button>
      </div>
      <todo-item
        v-for="item in todoStore.todos"
        :key="item.id"
        :todo="item"
        @change-handler="onChangeHandler"
      />
    </div>
  </div>
  <Dialog v-model:open="isOpen">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create new todo</DialogTitle>
        <DialogDescription class="flex flex-col gap-4 mt-4">
          <Input placeholder="New todo" class="h-[50px]" v-model="newTodo.todo" />
          <Button class="w-max ml-auto h-[50px]" @click="create()"> Create todo </Button>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuery, useMutation } from '@tanstack/vue-query'
import { getTodos } from './api/get_todos'
import { useTodoStore } from '@/stores/todo'
import { updateTodo } from './api/update_todo'
import { createTodo } from './api/create_todo'
import TodoItem from './components/todo_item/TodoItem.vue'
import type { CheckboxCheckedState } from 'reka-ui'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog'

const todoStore = useTodoStore()

const isOpen = ref(false)

const newTodo = ref({
  todo: '',
  completed: false,
  userId: localStorage.getItem('id'),
})

const { data, isLoading, refetch } = useQuery({
  queryKey: ['get_todos'],
  queryFn: () => getTodos(),
  select(data) {
    todoStore.setTodos(data.todos)
    return data
  },
})

const { mutate } = useMutation({
  mutationFn: ({ id, payload }: { id: number; payload: { completed: CheckboxCheckedState } }) =>
    updateTodo(id, payload),
  onSuccess: (data) => {
    todoStore.updateTodo(data.id, data.completed)
  },
})

const { mutate: create } = useMutation({
  mutationFn: () => createTodo(newTodo.value),
  onSuccess: () => {
    newTodo.value.todo = ''
    isOpen.value = false
    refetch()
  },
})

const onChangeHandler = (value: CheckboxCheckedState, id: number) => {
  const payload = {
    completed: value,
  }
  mutate({ id, payload })
}
</script>
