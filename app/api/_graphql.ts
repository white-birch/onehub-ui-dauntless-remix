import { GraphQLClient, gql } from 'graphql-request';

const { ONEHUB_GRAPHQL_BASE_URL } = process.env;

if (!ONEHUB_GRAPHQL_BASE_URL) {
  throw new Error('Missing environment variable: ONEHUB_GRAPHQL_BASE_URL');
}

const client = new GraphQLClient(ONEHUB_GRAPHQL_BASE_URL);

export default client;
export { gql } from 'graphql-request';
