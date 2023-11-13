import React,{useState} from "react";
import { TodoForm } from "./todoForm";

export const TodoWrapper = () =>{
    const [todos, setTodos] = useState([])
    const addTodo =>{
        setTodos{[...todos,{id uuidv4(), task:todo,
            completed: false, isEditing: false} ]}
    }
    return(
        <div className="TodoWrapper"> 
        <TodoForm addTodo={addTodo} />    

        </div>
    )
}