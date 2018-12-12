import { del } from '../common/request';

export interface Input {
  roleId: string;
}

export function deleteRole(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return del({
      accessToken,
      url: `${authorizationExtensionUrl}/roles/${input.roleId}`,
    });
  }
}
