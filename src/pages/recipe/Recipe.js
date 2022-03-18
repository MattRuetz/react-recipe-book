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
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to prepare.</p>
                    <ul>
                        {recipe.ingredients.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </div>
    );
}

export default Recipe;
