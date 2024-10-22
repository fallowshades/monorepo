# MonoScript: Full-Stack TypeScript Project

MonoScript is a monorepo-based full-stack application that demonstrates the integration of TypeScript, Express, and Vite in a modern web development stack.

## Project Structure

This project is organized as a monorepo with the following main directories:

- `client/`: Frontend application crafted with Vite, React, and TypeScript.
  The user interface is styled using Shadcn components and TailwindCSS for a modern, responsive design.
- `server/`: Robust backend application powered by Express, handling API requests and business logic.
- `shared/`: Common TypeScript types, interfaces, and utility functions used across both client and server.

## Technologies Used

- **TypeScript**: Used throughout the project for type-safe development
- **Express**: Powers the backend API
- **Vite**: Builds and serves the frontend application
- **React**: Used for building the user interface
- **Node.js**: Runtime for the server
- **TailwindCSS**: Used for styling the frontend application
- **Shadcn**: Used for styling the frontend application

## Getting Started

### Prerequisites

- Node.js (version 14 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/monoscript.git
   cd monoscript
   ```

2. Install dependencies for all packages:
   ```
   npm install
   ```
   or if using yarn:
   ```
   yarn install
   ```

### Running the Application

1. Start the backend server:

   ```
   cd server
   npm run dev
   ```

2. In a new terminal, start the frontend development server:

   ```
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite)

## Development

- The `client/` directory contains the React frontend application
- The `server/` directory contains the Express backend application
- Shared types and utilities can be found in the `shared/` directory

## Building for Production

1. Build the client:

   ```
   cd client
   npm run build
   ```

2. Build the server:

   ```
   cd server
   npm run build
   ```

3. Start the production server:
   ```
   cd server
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
