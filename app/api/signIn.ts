import { ClientError } from 'graphql-request';
import client, { gql } from './_graphql';

const signIn = async (email: string, password: string): Promise<string | undefined> => {
  try {
    const { signIn: token } = await client.request(
      gql`
        mutation SignIn($email: String!, $password: String!) {
          signIn(email: $email, password: $password)
        }
      `,
      { email, password }
    );

    return token;
  } catch (error) {
    const isClientError = error instanceof ClientError;
    const isInvalidLogin = isClientError && error.response.errors?.some((error) => ['BAD_REQUEST', 'UNAUTHORIZED'].includes(error.extensions.code));
    if (isInvalidLogin) return undefined;
    throw error;
  }
};

export default signIn;
