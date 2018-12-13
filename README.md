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

## Development

### 1. Set up Auth0 parameters

Scripts read Auth0 parameters from environment variables.

```bash
cat <<'EOF' > .env
DOMAIN=my-tenant.auth0.com
CLIENT_ID=xxx
CLIENT_SECRET=xxx
EXTENSION_URL=https://my-tenant.us.webtask.io/xxx/api
EOF
```

### 2. Run test scripts

```bash
env $(cat .env | xargs) node_modules/.bin/ts-node src/common/get-access-token.spec.ts
```
