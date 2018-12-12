import { patch } from '../common/request';

export interface Input {
  groupId: string;
  userIds: string[];
};

export function addGroupMembers(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return patch({
      accessToken,
      body: input.userIds,
      url: `${extensionUrl}/groups/${input.groupId}/members`,
    });
  }
}
