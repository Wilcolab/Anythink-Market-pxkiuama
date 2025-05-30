# Express Server Application

This is a simple Express server application that listens on port 8001. It is set up to use Nodemon for automatic code updates during development.

## Project Structure

```
express-server-app
├── src
│   └── index.js          # Entry point of the application
├── package.json          # Configuration file for npm
├── Dockerfile            # Dockerfile to build the application image
├── .gitignore            # Files and directories to be ignored by Git
└── README.md             # Documentation for the project
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (optional, but recommended)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-server-app
   ```

2. Install the dependencies:
   ```
   yarn install
   ```

### Running the Application

To start the server with automatic code updates, run:
```
yarn start
```

The server will be running at `http://localhost:8001`.

### Docker

To build and run the application in a Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-server-app .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-server-app
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.