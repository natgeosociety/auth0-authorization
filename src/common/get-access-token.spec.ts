import { getEnvironmentVariable } from './get-environment-variable';
import { getAccessToken } from './get-access-token';

async function main() {
  const clientId = getEnvironmentVariable('CLIENT_ID');
  const clientSecret = getEnvironmentVariable('CLIENT_SECRET');
  const domain = getEnvironmentVariable('DOMAIN');
  const accessToken = await getAccessToken({
    audience: 'urn:auth0-authz-api',
    clientId,
    clientSecret,
    domain,
  });
  console.log(accessToken);
}

if (require.main === module) {
  main()
  .catch((error: Error) => console.error(error));
}


