import { del } from '../common/request';

export interface Input {
  permissionId: string;
}

export function deletePermission(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return del({
      accessToken,
      url: `${authorizationExtensionUrl}/permissions/${input.permissionId}`,
    });
  }
}
