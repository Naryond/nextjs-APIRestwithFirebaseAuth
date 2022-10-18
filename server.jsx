const { ApolloServer, gql } = require('apollo-server');

//Scaler types can be String, Int, Float, Boolean, ID

const typeDefs = gql`
  type Query {
    hello: [String!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return null;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('Server is ready at ' + url);
});
