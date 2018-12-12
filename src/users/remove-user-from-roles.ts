import { del } from '../common/request';

export interface Input {
  userId: string;
  roleIds: string[];
}

export function removeUserFromRoles(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return del({
      accessToken,
      body: input.roleIds,
      url: `${authorizationExtensionUrl}/users/${input.userId}/roles`,
    });
  }
}
