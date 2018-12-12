import { get } from '../common/request';
import { IAuth0AuthorizationApiGroup } from '../interfaces';

export interface Input {
  groupId: string;
}

export function getGroup(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<IAuth0AuthorizationApiGroup> => {
    return get({
      accessToken,
      url: `${extensionUrl}/groups/${input.groupId}`,
    });
  }
}
