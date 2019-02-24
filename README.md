# auth0-authorization

Auth0 Authorization Extension API client library

## Installation

```bash
  npm install @cyrusbio/auth0-authorization
```

## AuthorizationClient

Use this client to access the [Auth0 Authorization Extension API](https://auth0.com/docs/api/authorization-extension).

```ts
import { AuthorizationClient } from '@cyrusbio/auth0-authorization';

const authorization = new AuthorizationClient({
  clientId: `${CLIENT_ID}`,
  clientSecret: `${CLIENT_SECRET}`,
  domain: `${TENANT}.auth0.com`,
  extensionUrl: `https://${TENANT}.us.webtask.io/xxx/api`,
});
```

Behind the scenes the client obtains an access token, caches it, and automatically refreshes it if it expires.

Each method returns a promise.

```ts
const groups = await authorization.getGroups();
```

## Types

[TypeScript](https://www.typescriptlang.org) types are included.

```ts
import { IAuth0AuthorizationApiGroup } from '@cyrusbio/auth0-authorization';

let group: IAuth0AuthorizationApiGroup;
```



## Tests

### Run tests with mocks

```bash
npm test
```

### Run tests without mocks

First, set up Auth0 parameters

```bash
cat <<'EOF' > .env
SKIP_MOCKS=true
AUTH0_AUDIENCE=xxx
AUTH0_CLIENT_ID=xxx
AUTH0_CLIENT_SECRET=xxx
AUTH0_DOMAIN=my-tenant.auth0.com
AUTH0_EXTENSION_URL=https://my-tenant.us.webtask.io/xxx/api
EOF
```

```bash
env $(cat .env | xargs) npm test
```
