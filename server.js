import "dotenv/config";

import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";

import dbConnect from "./dbConfig/dbConnect.js";

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
  });

const { url } = await startStandaloneServer(server, {
listen: { port: 4000 },
});

dbConnect()

console.log(`🚀  Server ready at: ${url}`);
