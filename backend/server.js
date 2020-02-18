import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: 'variables.env' });

import models from './models';

import cors from 'cors';

import schema from './schema';
import resolvers from './resolvers';

// create server and connect schemas with GraphQl
import { ApolloServer } from 'apollo-server-express';
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: models
});

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
server.applyMiddleware({ app });

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
