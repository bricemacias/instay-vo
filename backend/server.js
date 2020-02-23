import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: 'variables.env' });

import models from './models';

import cors from 'cors';

import jwt from 'jsonwebtoken';

import schema from './schema';
import resolvers from './resolvers';

// Generate port
const PORT = process.env.PORT || 4444;

// connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log(`DB connected`))
  .catch(err => console.error(err));
mongoose.set('useCreateIndex', true);

// Initialize application
const app = express();

// Cors
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.head('/graphql', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Request-Method', 'GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Accept, Content-Type, Content-Length'
  );
  res.end();
});

app.use(cors(corsOptions));

// Set up JWT authentication middleware

app.use(async (req, res, next) => {
  const token = req.headers['authorization'];
  if (token !== 'null') {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      req.currentUser = currentUser;
    } catch (err) {
      console.error(err);
    }
  }
  next();
});

// create server and connect schemas with GraphQl
import { ApolloServer } from 'apollo-server-express';
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req }) => {
    const token = await req.headers.authorization;
    let authUser;
    if (token !== 'null') {
      try {
        const currentUser = await jwt.verify(token, process.env.SECRET);

        if (currentUser) {
          authUser = currentUser;
        }
      } catch (err) {
        console.error(err);
      }
    }
    return Object.assign({ authUser }, models);
  }
});

// Apply middleware
server.applyMiddleware({ app });

// prepare for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client', 'build', 'index.html'));
  });
}

// listen
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
