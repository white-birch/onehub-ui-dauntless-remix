import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import Footer from '~/components/Footer';
import tailwind from './tailwind.css';

import type { ErrorBoundaryComponent, LinksFunction, MetaFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwind },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/icons/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/icons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/icons/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/icons/site.webmanifest' },
  { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5bbad5' },
  { rel: 'shortcut icon', href: '/icons/favicon.ico' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,800|Open+Sans:400,700|Source+Code+Pro:400,700',
  },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Dauntless Academy',
  viewport: 'width=device-width,initial-scale=1',
});

export const ErrorBoundary: ErrorBoundaryComponent = function () {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        An unexpected error has occurred!
        <Scripts />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col font-sans bg-white text-gray">
        <main className="flex-grow flex flex-col">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
