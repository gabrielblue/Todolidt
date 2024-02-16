import { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList";
// import TodoForm from "./TodoForm";
const Todo = () => {
    const [todos, setTodos] = useState('');

    useEffect(() => {
        axios.get("http://localhost:4000/todos")
         .then((res) => {
                setTodos(res.data);
            })
         .catch((err) => {
                console.log(err);
            })
    })
    return (
        <div className="home">
            <h1>To-Do List</h1>
            {todos && <TodoList todos={todos} />}
        </div>
    )
}
export default Todo;