import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

import './Recipe.css';
import useFetch from '../../hooks/useFetch';

function Recipe() {
    const { id } = useParams();

    const { mode, color } = useTheme();

    const {
        data: recipe,
        isPending,
        error,
    } = useFetch(`http://localhost:3000/recipes/${id}`);

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to prepare.</p>
                    <ul>
                        {recipe.ingredients.map((item) => (
                            <li style={{ color }} key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </div>
    );
}

export default Recipe;
