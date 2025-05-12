<template>
  <label
    :key="todo.id"
    :for="todo.id.toString()"
    class="flex items-center gap-2 justify-between py-2 border-b border-gray-200 last:border-b-0 cursor-pointer select-none"
    :class="[todo.completed ? 'line-through' : '']"
  >
    <div>{{ todo.todo }}</div>
    <Checkbox
      :id="todo.id.toString()"
      :model-value="todo.completed"
      @update:model-value="onChangeHandler($event, todo.id)"
    />
  </label>
</template>

<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import type { CheckboxCheckedState } from 'reka-ui'

interface Props {
  todo: {
    id: number
    todo: string
    completed: boolean
  }
  onChangeHandler: (value: CheckboxCheckedState, id: number) => void
}

defineProps<Props>()
</script>
