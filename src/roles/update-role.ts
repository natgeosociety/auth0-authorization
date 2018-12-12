import { put } from '../common/request';
import { IAuth0AuthorizationApiRole } from '../interfaces';

// Make permissions optional
export interface Input extends Pick<IAuth0AuthorizationApiRole, Exclude<keyof IAuth0AuthorizationApiRole, 'permissions'>> {
  permissions?: string[];
}

export function updateRole(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input): Promise<IAuth0AuthorizationApiRole> => {
    return put({
      accessToken,
      body: {
        name: input.name,
        description: input.description,
        applicationId: input.applicationId,
        applicationType: input.applicationType,
        permissions: input.permissions,
      },
      url: `${authorizationExtensionUrl}/roles/${input._id}`,
    });
  }
}
