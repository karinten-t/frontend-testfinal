import { useState, useEffect } from 'react';
import { getRecipes, deleteRecipe } from '../utils/api';
import '../styles/RecipeList.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await getRecipes();
      setRecipes(response);
    } catch (err) {
      setError('Failed to load recipes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id);
      setRecipes(recipes.filter((recipe) => recipe.id !== id));
    } catch (err) {
      setError('Failed to delete recipe');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="recipe-list-container">
      <h3>Your Recipes</h3>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h4>{recipe.title}</h4>
              <p>{recipe.description}</p>
              <p>Category: {recipe.category}</p>
              <button onClick={() => handleDelete(recipe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;