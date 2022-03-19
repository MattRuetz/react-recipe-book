import { Link } from 'react-router-dom';
// hooks
import { useTheme } from '../hooks/useTheme';
// Styles
import './RecipeList.css';

function RecipeList({ recipes }) {
    const { color } = useTheme();

    console.log(color);

    return recipes.length === 0 ? (
        <h3 className="error">There are no matches for this search 😔</h3>
    ) : (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="card">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime}</p>
                    <div>{recipe.method.slice(0, 100)}...</div>
                    <Link
                        to={`/recipes/${recipe.id}`}
                        style={{ outlineColor: color }}
                    >
                        Start Cooking...
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;
