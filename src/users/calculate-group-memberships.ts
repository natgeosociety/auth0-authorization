import { get } from '../common/request';

export interface Input {
  userId: string;
}

export function calculateGroupMemberships(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<void> => {
    return get({
      accessToken,
      url: `${authorizationExtensionUrl}/users/${input.userId}/groups/calculate`,
    });
  }
}
