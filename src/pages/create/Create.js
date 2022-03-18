import { useState } from 'react';

import './Create.css';

function Create() {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, method, cookingTime);
    };

    const handleAddIngredient = (e) => {
        e.preventDefault();

        if (newIngredient.trim() && !ingredients.includes(newIngredient)) {
            setIngredients((prevList) => [...prevList, newIngredient.trim()]);
        } else {
        }
        setNewIngredient('');
    };

    return (
        <div className="create">
            <h2 className="page-title">Add a New Recipe...</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe Title:</span>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>
                <label>
                    <span>Ingredients:</span>
                    <ul>
                        {ingredients.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <div className="ingredients">
                        <input
                            type="text"
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newIngredient}
                        />
                        <button
                            className="btn-alt"
                            onClick={handleAddIngredient}
                        >
                            +
                        </button>
                    </div>
                </label>
                <label>
                    <span>Directions:</span>
                    <input
                        type="text"
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Cooking Time:</span>
                    <input
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>

                <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default Create;
