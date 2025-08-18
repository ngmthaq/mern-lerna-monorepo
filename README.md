# MERN Monorepo

A monorepo setup for a full-stack MERN (MongoDB, Express, React, Node.js) application.

## Features

- **Monorepo structure** for managing backend and frontend in a single repository
- **Node.js & Express** backend API
- **React** frontend
- **MongoDB** database integration
- Easy local development and deployment

## Project Structure

```
mern-monorepo/
├── backend/      # Express API
├── frontend/     # React app
├── package.json  # Root scripts and dependencies
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/mern-monorepo.git
    cd mern-monorepo
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    npm install
    cd backend && npm install
    cd ../frontend && npm install
    ```

### Running the App

- **Backend**:
  ```bash
  cd backend
  npm run dev
  ```

- **Frontend**:
  ```bash
  cd frontend
  npm start
  ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

[MIT](LICENSE)