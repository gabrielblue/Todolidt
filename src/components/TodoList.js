const TodoList = (props) => {
    const todos = props.todos;
    const title = props.title;
    return (
        <div className='todoList'>
            <h2> {title} </h2>
            {todos.map((todo) => (
                <li key={todo.id} >
                    <h3>My Task today :  {todo.title }</h3>
                </li>
            ))}
        </div>
    )
}

export default TodoList;