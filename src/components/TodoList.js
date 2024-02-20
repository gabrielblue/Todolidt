
import React from "react";
const TodoList = ({ todoz }) => {
    return (
        <div className='todoList'>
            <h2>List</h2>
            {todoz.map((todo) => (
                <li key={todo.id} >
                    <h3>My Task today :  {todo.title}</h3>
                    <div>Created at: {todo.created_at? new Date(todo.created_at).toLocaleString() : ''}</div>
                </li>
            ))}
        </div>
    )
}

export default TodoList;