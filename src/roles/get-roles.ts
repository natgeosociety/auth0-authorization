import { get } from '../common/request';
import { IAuth0AuthorizationApiRole } from '../interfaces';

interface Response {
  roles: IAuth0AuthorizationApiRole[];
  total: number;
}

export function getRoles(authorizationExtensionUrl: string, accessToken: string) {
  return (): Promise<Response> => {
    return get({
      accessToken,
      url: `${authorizationExtensionUrl}/roles`,
    });
  }
}
