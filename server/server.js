
// require('dotenv').config();

// const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
// const path = require('path');
// const { authMiddleware } = require('./utils/auth');
// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');


// const PORT = process.env.PORT || 3001;
// const app = express();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const startApolloServer = async () => {
//   await server.start();

//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());

//   // Apply Apollo middleware with authentication context
//   app.use('/graphql', expressMiddleware(server, {
//     context: async ({ req }) => {
//       return authMiddleware(req);
//     }
//   }));

//   // Serve static files in production
//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/dist')));
//     app.get('*', (req, res) => {
//       res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//     });
//   }

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
// };

// startApolloServer();


require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.SECRET;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Apply Apollo middleware with authentication context
  app.use('/graphql', expressMiddleware(server, {
    context: async ({ req }) => {
      return authMiddleware(req);
    }
  }));

  // Serve static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Connect to the database and start the server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
