import fetch from 'node-fetch';

export interface IGetAccessTokenOptions {
  audience: string;
  clientId: string;
  clientSecret: string;
  domain: string;
}

interface IAuth0TokenResponse {
  access_token: string;
  scope: string; // 'read:users read:groups read:roles read:permissions',
  expires_in: number;// 86400
  token_type: 'Bearer';
}

/**
 * Get access token for an Auth0 API.
 */
export async function getAccessToken(options: IGetAccessTokenOptions): Promise<string> {
  const tokenUrl = `https://${options.domain}/oauth/token`;
  const payload = {
    audience: options.audience,
    client_id: options.clientId,
    client_secret: options.clientSecret,
    grant_type: 'client_credentials',
  };
  const response = await fetch(tokenUrl, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(await response.json())}`);
  }
  const responseBody: IAuth0TokenResponse = await response.json();
  return responseBody.access_token;
}
