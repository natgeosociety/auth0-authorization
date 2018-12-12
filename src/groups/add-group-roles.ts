import { patch } from '../common/request';

export interface Input {
  groupId: string;
  roleIds: string[];
}

export function addGroupRoles(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return patch({
      accessToken,
      body: input.roleIds,
      url: `${extensionUrl}/groups/${input.groupId}/roles`,
    });
  }
}
