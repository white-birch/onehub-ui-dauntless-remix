import { Form } from '@remix-run/react';
import TextBox from '../../components/TextBox';

import type { Transition } from '@remix-run/react/transition';

export default function SignInForm({ className, actionData, transition }: { className?: string; actionData: any; transition: Transition }) {
  return (
    <Form method="post" className={className}>
      <fieldset disabled={transition.state === 'submitting'}>
        <div className="flex flex-col">
          <label className="my-2">
            <strong>Email</strong>
            <br />
            <TextBox className="w-full" type="text" name="email" defaultValue={actionData?.values.email} hasError={!!actionData?.errors.email} />
          </label>

          <label className="my-2">
            <strong>Password</strong>
            <br />
            <TextBox className="w-full" type="password" name="password" defaultValue={actionData?.values.password} hasError={!!actionData?.errors.password} />
          </label>

          <button type="submit" className="bg-azure text-white px-8 py-2 my-2 rounded-lg hover:bg-azure-300 duration-200">
            {transition.state === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </fieldset>
    </Form>
  );
}
