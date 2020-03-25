# Instay-V0

## Project

The project is available on Heroku at the following address :

https://instay-v0.herokuapp.com

## Stack

Frontend : React, Styled Components
Backend : Node, Apollo, GraphQL, MongoDB 

## Installing and running Locally

- clone the repository
- at the root of the folder type **yarn install** and then **yarn run dev**
- in the backend folder, create a **variables.env** file, and put your own **MONGO_URI** for MongoDB database, and **SECRET** for jsonwebtoken

## Production mode

To go into production mode :

- go to the **client/src** folder
- open the **index.js** file
- inside the ApolloClient constructor change the **uri** to the one in production mode (commented in the code)
- same process if you want to go back to development mode

All the paths have been left as they are to avoid any production issues (for example **../../../images/** instead of **images/**). You can avoid this by modifying NODE_PATH in webpack configuration. The application was created using npx create-react-app

## Styles

Everything is styled using **styled-components**. You will find the theme and GlobalStyles file, as well as specific redundant styles used in the application inside the **client/src/styles** folder

## Test credentials

- **username**: Instaytravel
- **password**: 123456

Those credentials work for Influencers as well as for Hotel Owners
