import { redirect } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { getSession } from '~/sessions';

import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  if (!session.has('token')) return redirect('/sign-in');
  return null;
};

export default function Home() {
  return (
    <div className="flex flex-col flex-grow items-center">
      <p>Hello world!</p>
      <Link to="/sign-out">Sign out</Link>
    </div>
  );
}
