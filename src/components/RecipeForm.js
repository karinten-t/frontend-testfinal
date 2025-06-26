import { useState } from 'react';
import { createRecipe } from '../utils/api';
import '../styles/RecipeForm.css';

function RecipeForm({ onRecipeCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      await createRecipe({ title, description, category });
      onRecipeCreated();
      setTitle('');
      setDescription('');
      setCategory('');
    } catch (err) {
      setError('Failed to create recipe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recipe-form-container">
      <h3>Add New Recipe</h3>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          aria-label="Recipe Title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          aria-label="Recipe Description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          aria-label="Recipe Category"
        />
      </div>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Creating...' : 'Create Recipe'}
      </button>
    </div>
  );
}

export default RecipeForm;