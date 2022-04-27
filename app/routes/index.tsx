import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div className="flex flex-col flex-grow items-center">
      <p>Hello world!</p>
      <Link to="/sign-out">Sign out</Link>
    </div>
  );
}
