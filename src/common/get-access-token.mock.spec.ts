import * as nock from 'nock';
import { TestOptions } from '../options.spec';

export interface Mock {
  mock: nock.Scope;
  accessToken: string;
}

export function mockGetAccessToken(options: TestOptions): Mock {
  const audience = options.getAccessToken.audience;
  const clientId = options.getAccessToken.clientId;
  const clientSecret = options.getAccessToken.clientSecret;
  const domain = options.getAccessToken.domain;
  const dummyAccessToken = 'dummy.access.token';
  const mock = nock(`https://${domain}`)
  .post(`/oauth/token`, {
    audience: audience,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials',
  })
  .reply(200, {access_token: dummyAccessToken})
  return {mock, accessToken: dummyAccessToken};
}
