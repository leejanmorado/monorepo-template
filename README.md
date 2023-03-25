# React NestJS Monorepo Template

A minimal monorepo setup for React and NestJS using PNPM workspaces

## Features

- [Vite](https://vitejs.dev) with [React](https://reactjs.org), [TypeScript](https://www.typescriptlang.org) and [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).
- [Tailwind CSS v3](https://tailwindcss.com) with a [Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) that automatically sorts classes.
- Use [ESLint](https://eslint.org) and [Prettier](https://prettier.io) on VSCode.
- Write unit and integration tests with [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).

## Getting started

Use this repository as a [GitHub template](https://github.com/leejanmorado/monorepo-template/generate) or use [degit](https://github.com/Rich-Harris/degit) to clone to your machine with an empty git history:

```
npx degit leejanmorado/monorepo-template#master my-app
```

Then, install the dependencies:

```
pnpm install
```

## Scripts

- `pnpm start:dev` - starts both server and app in development.

## To do/for improvements

- Update README.md scripts
- Replace Jest with Vitest in server if possible
- Create a sample shared components/utils package to be used by the app
- [Playwright](https://playwright.dev/) setup for React end-to-end testing
- Implement a build system using [NX](https://nx.dev/) or [Turborepo](https://turbo.build/) 

