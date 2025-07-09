import { useState } from "react"
import useTodoContext from "../contexts/todoContext"

function TodoForm(){
    const [todoText, setTodoText] = useState('')
    const {addTodo} = useTodoContext()

    const handleTodoSubmission = (e) =>{
        e.preventDefault()

        addTodo({todo : todoText, isCompleted : false })
        setTodoText('')
    }

    return(
        <>
            <form onSubmit={handleTodoSubmission} className="flex">
                <input type="text"
                value={todoText}
                onChange={(e) => {setTodoText(e.target.value)}}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-black shrink-0">
                    Add
                </button>
            </form>
        </>
    )
}

export default TodoForm