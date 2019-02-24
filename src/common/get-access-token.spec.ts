
import test from 'ava';
import { getAccessToken } from './get-access-token';
import { TestOptions } from '../options.spec';
import { mockGetAccessToken } from './get-access-token.mock.spec';

export function getAccessTokenSpec(options: TestOptions) {
  options.skipMocks ? testWithoutMocks(options) : testWithMocks(options);
}

function testWithMocks(options: TestOptions) {
  test('getAccessToken should request an access token from Auth0', async (t) => {
    const {mock, accessToken: mockedAccessToken} = mockGetAccessToken(options);
    const accessToken = await getAccessToken(options.getAccessToken);
    t.deepEqual(accessToken, mockedAccessToken);
    mock.done();
  })
}

function testWithoutMocks(options: TestOptions) {
  test('getAccessToken should request an access token from Auth0', async (t) => {
    const accessToken = await getAccessToken(options.getAccessToken);
    t.is(typeof accessToken, 'string');
  })
}
