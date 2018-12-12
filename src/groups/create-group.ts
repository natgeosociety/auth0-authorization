import { create } from '../common/request';
import { IAuth0AuthorizationApiGroup } from '../interfaces';

// Remove _id
export type Input = Pick<IAuth0AuthorizationApiGroup, Exclude<keyof IAuth0AuthorizationApiGroup, '_id'>>;

export function createGroup(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<IAuth0AuthorizationApiGroup> => {
    return create({
      accessToken,
      body: {
        name: input.name,
        description: input.description,
      },
      url: `${extensionUrl}/groups`,
    });
  }
}
