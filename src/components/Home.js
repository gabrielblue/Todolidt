import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
// import TodoForm from "./TodoForm";
const Home = () => {
    return (
        <div className="home">
            <h1>Plans for today?</h1>
            <div>
            <TodoForm/>
            <TodoList />
        </div>
        </div>
    )
}
export default Home;


