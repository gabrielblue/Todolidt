import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TodoForm = () => {
    const [data, setTodos] = useState({
        title: '',
    });

     const handleChange = (e) => {
        const { name, value } = e.target;
        setTodos((prev) => {
            return { ...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.title.length === 0) {
            toast.error('Please enter a title', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            })
        } else (
        axios.post('http://localhost:5000/todos', data)
            .then(res => {
                toast.success('New todo has been created successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
            })
            })
            .catch(err => {
            toast.error('Something went wrong when creating todo list', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            })
        })
        
    )};

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <input
                    name="title"
                type="text"
                value={data.title}
                onChange={handleChange}
                    placeholder="Add New Task" />
                
                <button type="submit">Add</button>
            </div>
            <ToastContainer/>
        </form>
    )
}

export default TodoForm;