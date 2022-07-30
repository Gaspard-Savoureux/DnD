import { createServer, createPubSub } from '@graphql-yoga/node';
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
const os = require('os');

const pubSub = createPubSub()
// LE TRUC DE RANDOM NUMBER EST ACTUALLY VRAIMENT GOOD COMME EXEMPLE
const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
      }

      type Specs {
        cpu: Int!,
        memory: Int!,
      }

      type Subscription {
        countdown(from: Int!): Int!,
        specs: Specs,
        randomNumber: Float!
      }

      type Mutation {
        broadcastRandomNumber: Boolean,
        broadcastSpecs: Boolean
      }

    `,
    resolvers: {
      Query: {
        hello: () => 'world',
      },
      Subscription: {
        countdown: {
          // This will return the value on every 1 sec until it reaches 0
          subscribe: async function* (_, { from }) {
            for (let i = from; i >= 0; i--) {
              await new Promise((resolve) => setTimeout(resolve, 1000))
              yield { countdown: i }
            }
          },
        },
        specs: {
          // subscribe to the specs event
          subscribe: () => pubSub.subscribe('specs'),
          resolve: (payload) => payload,
        },
        randomNumber: {
          // subscribe to the randomNumber event
          subscribe: () => pubSub.subscribe('randomNumber'),
          resolve: (payload) => payload,
        },
      },
      Mutation: {
        broadcastRandomNumber: (_, args) => {
          // publish a random number
          pubSub.publish('randomNumber', Math.random())
        },
        broadcastSpecs: (_, args) => {
          // publish a random number
          const cpu = os.cpus()[0].speed;
          const memory = os.freemem();
          console.log(cpu, memory)
          pubSub.publish('specs', {cpu, memory})
        },
      },
    },
  },
})

server.start()
