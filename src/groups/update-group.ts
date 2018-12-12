import { put } from '../common/request';
import { IAuth0AuthorizationApiGroup } from '../interfaces';

export type Input = IAuth0AuthorizationApiGroup;

export function updateGroup(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<IAuth0AuthorizationApiGroup> => {
    return put({
      accessToken,
      body: {
        name: input.name,
        description: input.description,
      },
      url: `${extensionUrl}/groups/${input._id}`,
    });
  }
}
