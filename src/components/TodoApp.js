import TodoList from "./TodoList";
import UseFetch from "./UseFetch";
// import TodoForm from "./TodoForm";
const Todo = () => {
    const [data] = UseFetch('http://localhost:4002/todos');
    return (
        <div className="home">
            <h1>To-Do List</h1>
            {data && <TodoList todos={data} title="All Blogs" />}
        </div>
    )
}
export default Todo;