import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"
import UseFetch from "./UseFetch"

const TodoDetails = () => {
    const { id } = useParams()
    const { data: todos } = UseFetch('http://localhost:5000/todos/' + id);
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:5000/todos/' + id)
            .then(res => {
                alert('Blog Deleted Successfully');
                history.push('/');
        })
    }

    return (
        <div className="details">
            {todos && (
                <article>
                    <h3>{todos.title}</h3>
                    <button onClick={handleDelete} variant="danger"
                    className="mt-3" type="submit">Delete</button>
                </article>
            )}
        </div>
    )
}

export default TodoDetails;