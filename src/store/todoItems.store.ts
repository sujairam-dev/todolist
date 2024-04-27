import { create } from "zustand";
import { TodoItem } from "../interfaces/todo.interface";

interface TodoListStoreState {
  todolist: TodoItem[];
  addTodo: (newItem: TodoItem) => void;
  updateTodo: (updatedItem: TodoItem) => void;
  removeTodo: (itemId: string) => void;
}

const useTodoListStore = create<TodoListStoreState>((set) => ({
  todolist: [],
  addTodo: (newItem: TodoItem) =>
    set((state) => ({ ...state, todolist: [...state.todolist, newItem] })),
  updateTodo: (updatedItem: TodoItem) =>
    set((state) => ({
      ...state,
      todolist: [
        ...state.todolist.filter((item) => item.id !== updatedItem.id),
        updatedItem,
      ],
    })),
  removeTodo: (itemId: string) =>
    set((state) => ({
      ...state,
      todolist: [...state.todolist.filter((item) => item.id !== itemId)],
    })),
}));

export default useTodoListStore;
