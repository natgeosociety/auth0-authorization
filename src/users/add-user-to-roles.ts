import { patch } from '../common/request';

export interface Input {
  userId: string;
  roleIds: string[];
}

export function addUserToRoles(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return patch({
      accessToken,
      body: input.roleIds,
      url: `${authorizationExtensionUrl}/users/${input.userId}/roles`,
    });
  }
}
