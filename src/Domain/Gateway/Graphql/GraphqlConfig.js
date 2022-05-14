import apiConstraints from '../../Core/APIConstraints'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

export const graphqlConfig = new ApolloClient({
    uri: apiConstraints.baseGraphqlURL,
    cache: new InMemoryCache()
  });