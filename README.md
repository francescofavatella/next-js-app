[![Node.js CI](https://github.com/francescofavatella/next-js-app/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/francescofavatella/next-js-app/actions/workflows/node.js.yml)

# Next.js App

## Table of content

- [How to install](#how-to-install)
- [How to start](#how-to-start)
  - [Newly created pages](#newly-created-pages)
- [How to test](#how-to-test)
  - [How to run the test](#how-to-run-the-test)
  - [How to mock fetch](#how-to-mock-fetch)
  - [Testing async rendering](#testing-async-rendering)
  - [Testing list rendering](#testing-list-rendering)
- [Links](#links)

## How to install

```
npm install
```

## How to start

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

## How to test

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

### How to run the test

```
npm test
```

### How to mock fetch

https://gist.github.com/francescofavatella/9e659e4c82607c86042c5b84dc4ce4b0

### Testing async rendering

https://gist.github.com/francescofavatella/93a4f1e8f4dea4c675bfde0f8a513102

### Testing list rendering

https://gist.github.com/francescofavatella/232aea16e00bf3c204b413807f2cfe19

## Links

[Blog: Fullstack app using NextJS (React) and DataStax's AstraDB with the help of GitHub Copilot](https://www.eddiejaoude.io/blog-august-2021-nextjs-datastax?r_done=1)

[YouTube: Fullstack app using NextJS (React) and DataStax's AstraDB with the help of GitHub Copilot](https://www.youtube.com/watch?v=FhcCgg4pIg4)

[Node.js Collection Client](https://docs.datastax.com/en/astra/docs/astra-collection-client.html)
