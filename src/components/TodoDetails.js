import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"
import UseFetch from "./UseFetch"

const TodoDetails = () => {
    const { id } = useParams()
    const { data: todoz } = UseFetch('http://localhost:5000/todoz' + id);
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:5000/todoz' + id)
            .then(res => {
                alert('Blog Deleted Successfully');
                history.push('/');
        })
    }

    return (
        <div className="tododetails">
            {todoz && (
                <article>
                    <h3>{todoz.title}</h3>
                    <p></p>
                    <button onclick={handleDelete} variant="danger"
                    className="mt-3" type="submit">Delete</button>
                </article>
            )}
        </div>
    )
}

export default TodoDetails;