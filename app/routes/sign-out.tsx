import { redirect } from '@remix-run/node';
import { destroySession, getSession } from '~/sessions';

import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  return redirect('/sign-in', { headers: { 'Set-Cookie': await destroySession(session) } });
};
