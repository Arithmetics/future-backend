import { ApolloServer } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import { createContext } from "./context";
import { createServer } from "http";
import express from "express";
import { schema } from "./schema";
import { permissions } from "./permissions/index";

const { PORT = 5000 } = process.env;

const app = express();
const server = createServer(app);
const permissionedSchema = applyMiddleware(schema, permissions);
const apollo = new ApolloServer({
  schema: permissionedSchema,
  context: createContext,
  introspection: process.env.NODE_ENV !== "production",
  playground: process.env.NODE_ENV !== "production",
});
apollo.applyMiddleware({ app });

server.listen({ port: PORT }, () => {
  process.stdout.write(
    `🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}\n`
  );
});
