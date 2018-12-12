import { get } from '../common/request';
import { IAuth0AuthorizationApiGroup } from '../interfaces';

export interface Input {
  userId: string;
}

export interface Options {
  includeNestedGroups: boolean;
}

const defaultOptions: Options = {
  includeNestedGroups: false,
};

export function getUserGroups(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input, options?: Options): Promise<IAuth0AuthorizationApiGroup[]> => {
    options = {
      ...defaultOptions,
      ...options
    };
    return get({
      accessToken,
      url: `${authorizationExtensionUrl}/users/${input.userId}/groups${options.includeNestedGroups ? '/calculate' : ''}`,
    });
  }
}
