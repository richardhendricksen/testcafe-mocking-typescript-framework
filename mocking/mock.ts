import { RequestMock, t } from 'testcafe';

import { Endpoint } from './endpoints';

export class Mock {

  static async endpoint(endpoint: Endpoint, scenario: string, statusCode?: number): Promise<void> {
    // Initialise mocks dict if needed
    if (t.ctx.mocks === undefined) {
      t.ctx.mocks = {};
    }

    // Check if this endpoint already has a mock active in this test
    if (t.ctx.mocks[endpoint.name] !== undefined) {
      // Then remove request hook before setting new one
      await t.removeRequestHooks(t.ctx.mocks[endpoint.name]);
    }

    // create RequestMock
    let requestMock;
    if (statusCode !== undefined) {
      requestMock = RequestMock()
        .onRequestTo({url: new RegExp(endpoint.url), method: endpoint.method})
        .respond(this.getBody(scenario, endpoint.baseDir), statusCode, {'x-request-id': 'myRequestId'});
    } else {
      requestMock = RequestMock()
        .onRequestTo({url: new RegExp(endpoint.url), method: endpoint.method})
        .respond(this.getBody(scenario, endpoint.baseDir), 200);
    }

    // Add mock to test context
    t.ctx.mocks[endpoint.name] = requestMock;

    // Set requestHook
    return t.addRequestHooks(requestMock);
  }

  static getBody(scenario, folder): string {
    const fs = require('fs');
    const path = require('path');

    const rootDir = 'mocking/data/';

    const mockJsonPath = path.resolve(rootDir, folder, `${scenario}.json`);

    return fs.readFileSync(mockJsonPath, 'utf8');
  }
}
