import { del } from '../common/request';

export interface Input {
  groupId: string;
  userIds: string[];
}

export function deleteGroupMembers(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return del({
      accessToken,
      body: input.userIds,
      url: `${extensionUrl}/groups/${input.groupId}/members`,
    });
  }
}
