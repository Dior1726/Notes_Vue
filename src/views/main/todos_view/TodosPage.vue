<template>
  <div v-if="isLoading" class="flex justify-center items-center">Loading...</div>
  <div v-if="data" class="">
    <div class="bg-white rounded-xl p-5 max-w-2xl mx-auto shadow-sm">
      <div class="flex items-center justify-between mb-5">
        <h1 class="text-xl font-semibold text-center">Todos</h1>
        <Button>Add Todo</Button>
      </div>
      <todo-item
        v-for="item in todoStore.todos"
        :key="item.id"
        :todo="item"
        @change-handler="onChangeHandler"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery, useMutation } from '@tanstack/vue-query'
import { getTodos } from './api/get_todos'
import { Button } from '@/components/ui/button'
import { useTodoStore } from '@/stores/todo'
import { updateTodo } from './api/update_todo'
import TodoItem from './components/todo_item/TodoItem.vue'
import type { CheckboxCheckedState } from 'reka-ui'

const todoStore = useTodoStore()

const { data, isLoading } = useQuery({
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

const onChangeHandler = (value: CheckboxCheckedState, id: number) => {
  const payload = {
    completed: value,
  }
  mutate({ id, payload })
}
</script>
