import { TestPage } from '@po';
import { LOW_RES, NORMAL_RES } from '../config/it-config';
import { Endpoints, Mock } from '@mocking';

[NORMAL_RES].forEach(resolution => {

  fixture(`Overview ${resolution.string}`)
    .beforeEach(async t => {
      await t.resizeWindow(resolution.width, resolution.height);
      await Mock.endpoint(Endpoints.FIRST_ENDPOINT, 'default');
    });

  test('Test', async t => {

    // When overview page is opened
    await TestPage.open('test');

    // Then welcome text is shown
    await t.expect(await TestPage.$.welcomeText.innerText).eql('Hello world');

  });
});
