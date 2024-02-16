import React, { useState } from "react";

const TodoForm = () => {
    const [title, setTodos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTodos(e.target.value)}
            placeholder="Add New Task"/>
                <button type="submit">Add</button>
                </div>
        </form>
    )
}

export default TodoForm;