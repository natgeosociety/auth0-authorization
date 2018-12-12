import { get } from '../common/request';
import { IAuth0AuthorizationApiPermission } from '../interfaces';

interface Response {
  permissions: IAuth0AuthorizationApiPermission[];
  total: number;
}

export function getPermissions(authorizationExtensionUrl: string, accessToken: string) {
  return (): Promise<Response> => {
    return get({
      accessToken,
      url: `${authorizationExtensionUrl}/permissions`,
    });
  }
}
