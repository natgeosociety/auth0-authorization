import { get } from '../common/request';
import { IAuth0AuthorizationApiUser } from '../interfaces';

export interface Input {
  userId: string;
}

export function getUser(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<IAuth0AuthorizationApiUser> => {
    return get({
      accessToken,
      url: `${authorizationExtensionUrl}/users/${input.userId}`,
    });
  }
}
