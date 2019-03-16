# poc-template
A template with react, webpack, express for quick POCs

## How to
1. `npm i`
2. `npm run dev:api` and `npm run dev:web`

- React app on localhost:8081 (webpack dev server)
- API on localhost:3000 (default port)


## Config
This project uses [dotenv](https://www.npmjs.com/package/dotenv) for environment variables for the backend. 
1. Create a `.env`-file in the project folder
2. Variables added to `.env` will be available through `process.env`. Adding the variable `PORT=3002` will change the api port to 3002.
