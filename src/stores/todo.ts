/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'

interface Todo {
  id: number
  todo: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
}

export const useTodoStore = defineStore('todo', {
  state: (): TodoState => ({
    todos: [],
  }),
  actions: {
    setTodos(todos: any) {
      this.todos = todos
    },
    updateTodo(id: number, value: boolean) {
      const todoIndex = this.todos.findIndex((todo: any) => todo.id === id)
      if (todoIndex !== -1) {
        this.todos[todoIndex].completed = value
      }
    },
  },
})
