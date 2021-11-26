[![Node.js CI](https://github.com/francescofavatella/next-js-app/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/francescofavatella/next-js-app/actions/workflows/node.js.yml)

# Next.js App

## How to install the app

```
npm install
```

## How to start the app

```
npm run dev
```

Check that the app is up and running using the home page: http://localhost:3000

### Newly created pages

The members api (http://localhost:3000/api/members) will read the values from the Cassandra database:

```json
[
  {
    "id": "136b5f58-957b-4403-94d4-32a254819b6c",
    "github": "github-1",
    "location": "location-1",
    "name": "name-1"
  },
  {
    "id": "28b665ee-15ac-45e5-85fb-7081530d9f09",
    "github": "github-2",
    "location": "location-2",
    "name": "name-2"
  }
]
```

The members page: (http://localhost:3000/members) will use the previously implemented api.

## How to test it

Use the official Next.js documentation: https://nextjs.org/docs/testing#jest-and-react-testing-library

```
npm install --save-dev jest babel-jest @testing-library/react @testing-library/jest-dom identity-obj-proxy react-test-renderer

touch jest.config.js
mkdir __mocks__
touch __mocks__/fileMock.js
touch __mocks__/styleMock.js
touch jest.setup.js
mkdir __tests__
touch __tests__/index.test.jsx
```

### Run the test

```
npm test
```

### How to mock fetch

https://gist.github.com/francescofavatella/9e659e4c82607c86042c5b84dc4ce4b0

### Test async rendering

https://gist.github.com/francescofavatella/93a4f1e8f4dea4c675bfde0f8a513102

### Test list rendering

https://gist.github.com/francescofavatella/232aea16e00bf3c204b413807f2cfe19

## Links

[Blog: Fullstack app using NextJS (React) and DataStax's AstraDB with the help of GitHub Copilot](https://www.eddiejaoude.io/blog-august-2021-nextjs-datastax?r_done=1)

[YouTube: Fullstack app using NextJS (React) and DataStax's AstraDB with the help of GitHub Copilot](https://www.youtube.com/watch?v=FhcCgg4pIg4)

[Node.js Collection Client](https://docs.datastax.com/en/astra/docs/astra-collection-client.html)

# TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-typescript)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript with-typescript-app
# or
yarn create next-app --example with-typescript with-typescript-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
