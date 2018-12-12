import { del } from '../common/request';

export interface Input {
  groupId: string;
  roleIds: string[];
}

export function deleteGroupRoles(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return del({
      accessToken,
      body: input.roleIds,
      url: `${extensionUrl}/groups/${input.groupId}/roles`,
    });
  }
}
