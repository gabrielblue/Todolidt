import TodoList from "./TodoList";
import UseFetch from "./UseFetch";
// import TodoForm from "./TodoForm";
const Home = () => {
    const {data} = UseFetch('http://localhost:5000/todos');
    return (
        <div className="home">
            <h1>Hello these are your tasks today</h1>
            {data && <TodoList todos={data} title="All Here" />}
        </div>
    )
}
export default Home;