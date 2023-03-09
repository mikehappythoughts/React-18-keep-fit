# Keep Fit app with searchable exercises

![Desktop and mobile screenshots of Keep Fit](https://www.mikehappythoughts.co.uk/gitimages/keep_fit.jpeg)

## Description

The Keep Fit app is an accessible and responsive SPA using the below tech stack.

## Tech Stack

React js 18, CSS, Typescript, React Material Ui and easy-peasy state management

## Documentation

For detailed explanation on React, check out the [documentation](https://reactjs.org/).

## Getting Started
Please note rename the .env.example to .env.
Inside the .env file you will see this **VITE_REACT_APP_API_URL =''** enter the json server url in between the single quotes this will allow the app to work with the JSON data.

```bash
# install dependencies
$ npm install

# serve json placeholder at localhost:3500 do this before starting the app or it will not work
$ npx json-server -p 3500 -w data/db.json

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
```
