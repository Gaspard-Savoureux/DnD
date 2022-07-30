require("dotenv").config();
import { createServer, createPubSub } from '@graphql-yoga/node';
import mongoose from "mongoose";
import schema from './graphql';
import { models } from './models';

const db = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/5e-database';

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const pubSub = createPubSub()

const context = {
  models,
  pubSub
};

const server = createServer({schema, context});

  //schema
  // schema: {
  //   typeDefs: /* GraphQL */ `
  //     type Query {
  //       hello: String
  //     }

  //     type Specs {
  //       cpu: Int!,
  //       memory: Int!,
  //     }

  //     type Subscription {
  //       countdown(from: Int!): Int!,
  //       specs: Specs,
  //       randomNumber: Float!
  //     }

  //     type Mutation {
  //       broadcastRandomNumber: Boolean,
  //       broadcastSpecs: Boolean
  //     }

  //   `,
  //   resolvers: {
  //     Query: {
  //       hello: () => 'world',
  //     },
  //     Subscription: {
  //       countdown: {
  //         // This will return the value on every 1 sec until it reaches 0
  //         subscribe: async function* (_, { from }) {
  //           for (let i = from; i >= 0; i--) {
  //             await new Promise((resolve) => setTimeout(resolve, 1000))
  //             yield { countdown: i }
  //           }
  //         },
  //       },
  //       specs: {
  //         // subscribe to the specs event
  //         subscribe: () => pubSub.subscribe('specs'),
  //         resolve: (payload) => payload,
  //       },
  //       randomNumber: {
  //         // subscribe to the randomNumber event
  //         subscribe: () => pubSub.subscribe('randomNumber'),
  //         resolve: (payload) => payload,
  //       },
  //     },
  //     Mutation: {
  //       broadcastRandomNumber: (_, args) => {
  //         // publish a random number
  //         pubSub.publish('randomNumber', Math.random())
  //       },
  //       broadcastSpecs: (_, args) => {
  //         // publish a random number
  //         const cpu = os.cpus()[0].speed;
  //         const memory = os.freemem();
  //         console.log(cpu, memory)
  //         pubSub.publish('specs', {cpu, memory})
  //       },
  //     },
  //   },
  // },
//})

server.start()
