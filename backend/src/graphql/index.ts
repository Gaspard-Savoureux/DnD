import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./Types/types";
import resolvers from "./Resolvers/resolvers";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;