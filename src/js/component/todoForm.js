import React, {useState} from "react";

export const TodoForm = () => { 
    const [value,setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        console.log(value);
    }
     
    return(
        <form className="TodoForm" onSubmit={handleSubmit}> 
            <input type="text"className="todo-input" 
            placeholder = "What are the task for today?"
            onChange={(e) => setValue(e.target.value)}/>
            <buttom type="add" className = "todo-buttom">Add Task</buttom>
        </form>
    )
}