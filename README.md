# Install dependencies

```bash
npm i
```

# Run a test script

## 1. Set up Auth0 parameters

Scripts read Auth0 parameters from environment variables.

```bash
cat <<'EOF' > .env
DOMAIN=my-tenant.auth0.com
CLIENT_ID=xxx
CLIENT_SECRET=xxx
EXTENSION_URL=https://my-tenant.us.webtask.io/xxx/api
EOF
```

## 2. Run script

```bash
env $(cat .env | xargs) node_modules/.bin/ts-node src/common/get-access-token.spec.ts
```
