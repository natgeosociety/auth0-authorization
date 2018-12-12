export class AuthorizationClient {
  private _options: IAuthorizationClientOptions;

  constructor(options: IAuthorizationClientOptions) {
    this._options = options;
  }
}

interface IAuthorizationClientOptions {
  clientId: string;
  clientSecret: string;
  domain: string;
  extensionUrl: string;
}
