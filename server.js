import "dotenv/config";
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";
import dbConnect from "./dbConfig/dbConnect.js";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    csrfPrevention: true,
    cache: "bounded",
  });


await server.start();
app.use(
  '/api/countries',
  cors(),
  bodyParser.json(),
  expressMiddleware(server)
);

dbConnect() // connect to MongoDb Atlas database

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/api/countries`);
