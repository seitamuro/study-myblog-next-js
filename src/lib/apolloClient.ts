import config from "./aws-exports.js";
import { ApolloClient, InMemoryCache, ApolloLink } from "apollo-boost";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

const link = ApolloLink.from([
  createAuthLink({
    url: config.API.GraphQL.endpoint,
    region: config.API.GraphQL.region,
    auth: {
      type: "API_KEY",
      apiKey: config.API.GraphQL.apiKey,
    },
  }) as unknown as ApolloLink,
  createSubscriptionHandshakeLink({
    url: config.API.GraphQL.endpoint,
    region: config.API.GraphQL.region,
    auth: {
      type: "API_KEY",
      apiKey: config.API.GraphQL.apiKey,
    },
  }) as unknown as ApolloLink,
]);

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
