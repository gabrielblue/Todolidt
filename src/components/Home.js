import TodoList from "./TodoList";
import UseFetch from "./UseFetch";
// import TodoForm from "./TodoForm";
const Home = () => {
    const {data} = UseFetch('http://localhost:5000/todoz');
    return (
        <div className="home">
            <h1>To-Do List</h1>
            {data && <TodoList todoz={data} title="All Here" />}
        </div>
    )
}
export default Home;