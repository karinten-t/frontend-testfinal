# Recipe App Frontend
`A React-based single-page application for managing recipes, with user authentication via JWT.`
#### Setup Instructions

Clone the repository:
git clone <frontend-repo-url>
cd recipe-app-frontend


Install dependencies:
npm install


Set environment variables:Create a .env file in the root directory with:
REACT_APP_API_URL=http://localhost:5000/api

Replace http://localhost:5000/api with the deployed Flask API URL if necessary.

Run the application:
npm start

The app will be available at http://localhost:3000.


## API Endpoints
-- The frontend interacts with the following Flask API endpoints: --

POST /api/register: Register a new user (username, email, password).
POST /api/login: Authenticate a user and return a JWT.
GET /api/profile: Retrieve authenticated user’s profile (protected).
PUT /api/profile: Update user profile (protected).
POST /api/items: Create a recipe (title, description, category).
GET /api/items: List all recipes for the authenticated user.
DELETE /api/items/:id: Delete a recipe.

## Technologies Used

`React: Front-end framework for building the SPA.
react-router-dom: Client-side routing.
CSS: Responsive styling.
React Testing Library: For unit testing the login component.
Jest: Testing framework.`

## Deployment
Deploy the application to Vercel:

Push the code to a GitHub repository.
Connect the repository to Vercel.
Set the REACT_APP_API_URL environment variable in Vercel to point to the Flask API.

## Testing
Run tests with:
npm test

`Tests are located in src/tests/ and include a unit test for the Login component.`
Notes

Ensure the Flask backend is running and accessible at the URL specified in .env.
The app uses localStorage to store the JWT securely.
The UI is responsive and follows WCAG guidelines for accessibility.