import { get } from '../common/request';
import { IAuth0AuthorizationApiRole } from '../interfaces';

export interface Input {
  groupId: string;
}

type Response = IAuth0AuthorizationApiRole[];

export function getGroupRoles(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<Response> => {
    return get({
      accessToken,
      url: `${extensionUrl}/groups/${input.groupId}/roles`,
    });
  }
}
