import { patch } from '../common/request';

export interface Input {
  userId: string;
  groupIds: string[];
}

export function addUserToGroups(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return patch({
      accessToken,
      body: input.groupIds,
      url: `${authorizationExtensionUrl}/users/${input.userId}/groups`,
    });
  }
}
