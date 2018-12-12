import { get } from '../common/request';
import { IAuth0AuthorizationApiRole } from '../interfaces';

export interface Input {
  roleId: string;
}

export function getRole(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<IAuth0AuthorizationApiRole> => {
    return get({
      accessToken,
      url: `${authorizationExtensionUrl}/roles/${input.roleId}`,
    });
  }
}
