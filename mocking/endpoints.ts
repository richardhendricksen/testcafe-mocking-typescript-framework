export class Endpoints {
  // sort alphabetically
  static FIRST_ENDPOINT: Endpoint = {
    name: 'FIRST_ENDPOINT',
    url: '/api/endpoint/[^/]+/user$',
    method: 'GET',
    baseDir: 'first_endpoint'
  };
}

export class Endpoint {
  name: string;
  url: string;
  method: string;
  baseDir: string;
}
