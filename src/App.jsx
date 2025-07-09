import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/todoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos([{id : Date.now(), ...todo },...todos])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((val) => val.id !== id ))
  }

  const updateTodo = (id, todo) => {
    setTodos((prevValue) => prevValue.map((val) => val.id === id? {...val, todo : todo} : val))
  }

  const todoComplete = (id) => {
    setTodos((prevValue) => prevValue.map((val) => val.id === id ? {...val, isCompleted : !val.isCompleted} : val))
  }

  
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("savedTodos"))
    console.log("saved",savedTodos)
    if (savedTodos && savedTodos.length > 0){
      console.log(todos)
      setTodos(savedTodos)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("savedTodos", JSON.stringify(todos))
    console.log("set",todos)
  }, [todos])

  return (
    <>
      <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, todoComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((value) => <TodoList key={value.id} todo={value} />)}
                    </div>
                </div>
            </div>

      </TodoProvider>
    </>
  )
}

export default App
