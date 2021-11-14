# matteoandreani.com

## General

## Git Flow & Branching Model

- `main` branch reflects state of production website and is hooked with production deployment in Netlify / Vercel. The `main` branch will be protected and only allows pushes via a pull request from `staging` branch.
- `staging` branch reflects latest state of development version and is hooked with a staging deployment in Netlify / Vercel. Feature branches will be derived from the `staging` branch and merged back via a pull request into the `staging` branch.

## Setup

## Environment

All environment variables are stored in `.env` files.

```bash
# used for generating sitemap
NEXT_STATIC_BASE_URL=<:BASE_URL>
```

## Development

`yarn` is enforced as package engine via `engine-strict = true` setting in `.npmrc` and `engines` config in `package.json`.

1. Install via `yarn install`
2. Run dev mode via `yarn dev`

## Build

1. `yarn build`
