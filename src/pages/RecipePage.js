import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';

function RecipePage() {
  const handleRecipeCreated = () => {
  
    window.location.reload();
  };

  return (
    <div>
      <RecipeForm onRecipeCreated={handleRecipeCreated} />
      <RecipeList />
    </div>
  );
}

export default RecipePage;