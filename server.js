const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { categories, products } = require('./db');

//Scaler types can be String, Int, Float, Boolean, ID

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    categories,
    products,
  },
});

server.listen().then(({ url }) => {
  console.log('Server is ready at ' + url);
});
