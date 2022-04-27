import { json, redirect } from '@remix-run/node';
import { useLoaderData, useTransition } from '@remix-run/react';
import SignInForm from '~/routes/sign-in/SignInForm';
import { commitSession, getSession } from '~/sessions';

import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { signIn } from '~/api';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));

  if (session.has('token')) return redirect('/');

  const data = { error: session.get('error') };

  return json(data, { headers: { 'Set-Cookie': await commitSession(session) } });
};

export const action: ActionFunction = async ({ request }) => {
  const { email, password } = Object.fromEntries(await request.formData()) as { email: string; password: string };
  const session = await getSession(request.headers.get('Cookie'));
  const token = await signIn(email, password);

  if (!token) {
    session.flash('error', 'Invalid email or password.');
    return redirect('/sign-in', { headers: { 'Set-Cookie': await commitSession(session) } });
  }

  session.set('token', token);
  return redirect('/', { headers: { 'Set-Cookie': await commitSession(session) } });
};

export default function SignIn() {
  const { error } = useLoaderData() as { error: string | undefined };
  const transition = useTransition();

  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <img src="/dauntless-with-name.png" alt="Dauntless Academy" className="max-w-sm" />
      <SignInForm
        className="font-extralight mt-2 md:mt-4 px-6 w-full max-w-md text-md"
        error={transition.state === 'idle' ? error : undefined}
        transition={transition}
      />
    </div>
  );
}
