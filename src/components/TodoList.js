
import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UseFetch from "./UseFetch";

const TodoList = () => {
    const { data: todos } = UseFetch('http://localhost:4000/todos'); 
    const history = useHistory();

    const handleClick = (e, id) => {
        e.preventDefault();
        handleDelete(id);
    }

    const handleDelete = (id) => { 
        window.location.reload(true)
        
        axios.delete('http://localhost:4000/todos/' + id)
            .then(res => {
                alert('Todo Deleted Successfully');
                history.push('/' ); 
            })
            .catch(error => {
                console.error('Error deleting todo:', error);
                alert('Failed to delete todo. Please try again.');
            });
    }

    return (
        <div className='todoList'>
            {todos && todos.map((todo) => (
                <div className="preview" key={todo.id} >
                    <h3>My Task today : {todo.title} 
                        <button onClick={(e) => handleClick(e ,todo.id)}> 
                            <i className="fa fa-trash" aria-hidden="true"></i> 
                        </button>
                    </h3> 
                </div>
            ))}
        </div>
    )
}

export default TodoList;



