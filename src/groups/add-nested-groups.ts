import { patch } from '../common/request';

export interface Input {
  groupId: string;
  nestedGroupIds: string[];
}

export function addNestedGroups(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return patch({
      accessToken,
      body: input.nestedGroupIds,
      url: `${extensionUrl}/groups/${input.groupId}/nested`,
    });
  }
}
