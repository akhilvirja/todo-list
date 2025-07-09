import { createContext, useContext } from "react";

export const toDoContext = createContext({
    todos: [],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    updateTodo : (id, updatedTodo) => {},
    todoComplete : (id) => {},
})

export const TodoProvider = toDoContext.Provider

export default function useTodoContext(){
    return useContext(toDoContext)
}
