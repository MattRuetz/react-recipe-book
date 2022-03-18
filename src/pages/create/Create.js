import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import './Create.css';

function Create() {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);

    const navigate = useNavigate();

    const { postData, data } = useFetch(
        'http://localhost:3000/recipes',
        'POST'
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({
            title,
            ingredients,
            method,
            cookingTime: cookingTime + ' minutes',
        });
    };

    const handleAddIngredient = (e) => {
        e.preventDefault();

        if (newIngredient.trim() && !ingredients.includes(newIngredient)) {
            setIngredients((prevList) => [...prevList, newIngredient.trim()]);
        } else {
            console.log('Repeat ingredient added. Bypassing..');
        }
        setNewIngredient('');
        ingredientInput.current.focus();
    };

    // Redirect to home when data is submitted from form
    useEffect(() => {
        if (data) {
            navigate('/');
        }
    }, [data, navigate]);

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
                        placeholder="ex. Charlie's Famous Bean Stew"
                        required
                    />
                </label>
                <label>
                    <span>Ingredients:</span>
                    <div className="ingredients">
                        <div className="text-and-btn">
                            <input
                                type="text"
                                onChange={(e) =>
                                    setNewIngredient(e.target.value)
                                }
                                value={newIngredient}
                                placeholder="ex. Tomatoes"
                                ref={ingredientInput}
                            />
                            <button
                                className="btn-alt"
                                onClick={handleAddIngredient}
                            >
                                +
                            </button>
                        </div>
                        {ingredients.length > 0 && (
                            <p className="ingredients">
                                <strong>So far: </strong>
                                {ingredients.map((item, index) =>
                                    index === ingredients.length - 1 ? (
                                        <em key={item}>{item}. </em>
                                    ) : (
                                        <em key={item}>{item}, </em>
                                    )
                                )}
                            </p>
                        )}
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
                    <span>Cooking Time (minutes):</span>
                    <input
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        placeholder="ex. 45"
                        required
                    />
                </label>

                <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default Create;
