import { put } from '../common/request';
import { IAuth0AuthorizationApiPermission } from '../interfaces';

// Make permissions optional
export type Input = IAuth0AuthorizationApiPermission;

export function updatePermission(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<IAuth0AuthorizationApiPermission> => {
    return put({
      accessToken,
      body: {
        name: input.name,
        description: input.description,
        applicationId: input.applicationId,
        applicationType: input.applicationType,
      },
      url: `${authorizationExtensionUrl}/permissions/${input._id}`,
    });
  }
}
