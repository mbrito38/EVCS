## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
yarn

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

To create a production version of your app:

```bash
yarn build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Payload backend

run this in terminal, make sure you have docker daemon running, in Mac you just run docker desktop to get the daemon running

set -a | source .env | docker-compose up

For dev

set -a | source .env | docker-compose -f docker-dev-compose.yml up

The docker compose spins up the frontend on port 3000, payload on 5000 which connects to mongo on 27017, also spins up an nginx which reverse proxies port 80 (default port on browsers) to 3000

Sometimes you will have to rebuild the image such as when you add dependencies to node modules

docker build -t tomdo1234/evcs .   

and for the backend payload

cd backend-payload

docker build -t tomdo1234/payloadbackend .  