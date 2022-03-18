import { useParams } from 'react-router-dom';

import './Recipe.css';
import useFetch from '../../hooks/useFetch';

function Recipe() {
    const { id } = useParams();

    const {
        data: recipe,
        isPending,
        error,
    } = useFetch(`http://localhost:3000/recipes/${id}`);

    return (
        <div className="recipe">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipe && <h3>{recipe.title}</h3>}
        </div>
    );
}

export default Recipe;
