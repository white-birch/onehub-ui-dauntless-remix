import { useActionData, useTransition } from '@remix-run/react';
import SignInForm from '~/routes/sign-in/SignInForm';

import type { ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  const values = Object.fromEntries(await request.formData());
  console.info(values);
};

export default function SignIn() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <img src="/dauntless-with-name.png" alt="Dauntless Academy" className="max-w-sm" />
      <SignInForm className="font-extralight mt-2 md:mt-4 px-6 w-full max-w-md text-md" actionData={actionData} transition={transition} />
    </div>
  );
}
