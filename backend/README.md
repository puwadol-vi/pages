# Setup

`npm install next@latest react@latest react-dom@latest`

# Run

`npm run dev`

# Clear

`rm -rf node_modules package-lock.json`

`npm cache clean --force`

`npm install`

# Call api

`curl -X POST http://localhost:3000/api/v1/name/getName -H "Content-Type: application/json" -d '{"id": 1}'`
