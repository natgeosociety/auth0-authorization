import { TestOptions } from './options.spec';
import { getAccessTokenSpec } from './common/get-access-token.spec';

// Generate test options
const options: TestOptions = {
  skipMocks: process.env.SKIP_MOCKS === 'true', // default false (use mocks)
  getAccessToken: {
    audience: process.env.AUTH0_AUDIENCE || 'http://audience',
    clientId: process.env.AUTH0_CLIENT_ID || 'testClientId',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || 'testClientSecret',
    domain: process.env.AUTH0_DOMAIN || 'test.auth0.com',
  },
}

// Run tests
getAccessTokenSpec(options);
