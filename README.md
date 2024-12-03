Note App
A full-stack Note-Taking application where users can create, edit, and organize their notes with ease. This project implements secure user authentication and a responsive interface.
Features
- User registration and authentication (JWT-based)
- CRUD operations for managing notes
- Responsive and modern UI using React and Bootstrap
- Secure API endpoints with middleware for authentication
- Organized backend structure with MVC design
Technologies Used
Backend:
- Node.js and Express.js: For the RESTful API.
- MongoDB: As the database.
- Mongoose: For object data modeling (ODM).
- JWT: For secure token-based authentication.
- Bcrypt: For password hashing.
Frontend:
- React: For building the user interface.
- React Router: For routing.
- Bootstrap: For responsive design.
- Axios: For making HTTP requests.
Project Structure

```
note-app/
├── frontend/      # React app for the user interface
│   ├── src/
│   │   ├── components/  # UI components (e.g., Login, Register, Home)
│   │   ├── context/     # Auth context for global state
│   │   ├── App.js       # Main app component
│   │   └── index.css    # Global styles
│   ├── package.json     # Frontend dependencies
│   └── public/          # Static assets
├── backend/       # Express API server
│   ├── models/    # Database schemas (User, Note)
│   ├── routes/    # API endpoints (userRoutes, noteRoutes)
│   ├── middleware/auth.js  # Authentication middleware
│   ├── server.js  # Main server file
│   ├── .env       # Environment variables
│   └── package.json  # Backend dependencies
```

Installation
Prerequisites:
- Node.js
- MongoDB Atlas or a local MongoDB instance
Steps:
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/note-app.git](https://github.com/aasif15/Note-App.git)
   cd note-app
   ```
2. Install dependencies for both backend and frontend:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the `backend` directory with the following keys:
   ```
   MONGODB_URI=<Your MongoDB URI>
   JWT_SECRET=<Your Secret Key>
   PORT=5000
   ```
4. Start the application:
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend server
   cd ../frontend
   npm start
   ```
5. Open your browser at `http://localhost:3000`.
API Endpoints
Users:
- POST /api/users/register: Register a new user.
- POST /api/users/login: Log in and receive a JWT.
Notes:
- GET /api/notes: Fetch all notes for the authenticated user.
- POST /api/notes: Create a new note.
- PUT /api/notes/:id: Update an existing note.
- DELETE /api/notes/:id: Delete a note.
Scripts
Frontend:
- npm start: Starts the development server.
- npm run build: Builds the app for production.
Backend:
- npm start: Starts the Express server.
- npm run dev: Starts the server in development mode with hot reloading.
License
This project is licensed under the MIT License.
