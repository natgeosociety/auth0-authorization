import { get } from '../common/request';
import { IAuth0AuthorizationApiPermission } from '../interfaces';

export interface Input {
  permissionId: string;
}

export function getPermission(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<IAuth0AuthorizationApiPermission> => {
    return get({
      accessToken,
      url: `${authorizationExtensionUrl}/permissions/${input.permissionId}`,
    });
  }
}
