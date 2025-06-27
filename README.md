#### RECIPE APP 
.A full-stack web application for creating, managing, and browsing personal recipes. Built using React.js for the frontend and Flask for the backend API with secure JWT-based authentication and persistent session management.

## live deployment
1. live app url
2.  Backend API hosted on:
https://backend-finale-6.onrender.com

### tech used
1. React 18+

2. React Router DOM

3. CSS Modules (.css)

4. Jest + React Testing Library (for unit testing)

### GETTING STARTED
## clone repository
git clone https://github.com/yourusername/recipe-app.git
cd recipe-app

## installing dependancies
cd frontend
npm install

### project structure
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Navbar.jsx
│   │   ├── RecipeForm.jsx
│   │   ├── RecipeList.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProfilePage.jsx
│   │   └── RecipePage.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Dashboard.css
│   │   ├── RecipeForm.css
│   │   ├── RecipeList.css
│   │   └── Register.css
│   ├── utils/
│   │   └── api.js
│   ├── App.jsx
│   └── index.js
└── README.md

### Authentication
## jwt-based-login
. After login, the backend returns an access token.
. The token is stored in localStorage and added to each protected API request via an Authorization header.

### features
## user authentification
1. Register: /register

2. Login: /login

3. Profile Dashboard: /profile – displays authenticated user's profile.

## recipe management
1. Create Recipe: via RecipeForm component

2. View All Recipes: in RecipeList component

3. Delete Recipe: with confirmation and re-render

4. Protected Endpoints: all recipe routes require authentication

### testing
run: npm test

### api intergration
## Centralizes API calls:

1. login(), register()

2. getProfile(), updateProfile()

3. getRecipes(), createRecipe(), deleteRecipe()

## Handles:

1. JSON response parsing

2. Error handling

3. Attaches JWT in headers

### routing
Route             Description	
/	              Home + Dashboard
/login	          Login page	
/register	      Register page	
/profile	      User profile dashboard	
/recipes	      Recipe creation + list	

## starting server
npm sart

## Set Backend URL
. Make sure the backend API URL in utils/api.js matches your backend server