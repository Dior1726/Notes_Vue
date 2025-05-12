/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'vue-sonner'
import TodoService from '@/services/todo.service'

export const createTodo = async (payload: any) => {
  try {
    const { data } = await TodoService.create(payload)
    toast.success('Todo created successfully')
    return data
  } catch (error) {
    toast.error('Error creating todo')
    throw error
  }
}
