import { TestcafePage } from '@po';
import { NORMAL_RES } from '../config/it-config';
import { Endpoints, Mock } from '@mocking';

[NORMAL_RES].forEach(resolution => {

    fixture(`LandingPage ${resolution.string}`)
        .beforeEach(async t => {
            // await t.resizeWindow(resolution.width, resolution.height);
            await Mock.endpoint(Endpoints.FIRST_ENDPOINT, 'default');
        });

    test('Open', async t => {

        // When google page is opened
        await TestcafePage.open();

        // Then input is empty
        await t.expect(await TestcafePage.$.input.innerText).eql('');

    });
});
