import { get } from '../common/request';
import { IAuth0AuthorizationApiUser } from '../interfaces';

interface Response {
  start: number;
  limit: number;
  length: number;
  users: IAuth0AuthorizationApiUser[];
  total: number;
}

interface Options {
  page: number;
  perPage: number;
}

const getUsersDefaultOptions: Options = {
  page: 1,
  perPage: 25,
};

export function getUsers(authorizationExtensionUrl: string, accessToken: string) {
  return (options?: Options): Promise<Response> => {
    options = {
      ...getUsersDefaultOptions,
      ...options
    };
    return get({
      accessToken,
      url: `${authorizationExtensionUrl}/users`,
      queryParams: {
        page: `${options.page}`,
        per_page: `${options.perPage}`,
      }
    });
  }
}
