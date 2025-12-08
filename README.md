# TypeScript Backend Application

This project is a simple backend application built with TypeScript, Express, and Supabase. It serves as a starting point for building scalable and maintainable server-side applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd typescript-backend-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` template and fill in your Supabase credentials.

## Usage

To start the server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## Routes

- `GET /health`: Returns a simple status message to check if the server is running.

## Environment Variables

The following environment variables are required:

- `SUPABASE_URL`: The URL of your Supabase project.
- `SUPABASE_ANON_KEY`: The anonymous API key for your Supabase project.

## License

This project is licensed under the MIT License.