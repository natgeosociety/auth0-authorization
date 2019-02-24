export interface TestOptions {
  skipMocks: boolean;
  getAccessToken: {
    audience: string;
    clientId: string;
    clientSecret: string;
    domain: string;
  },
}
