import { TestcafePage } from '@po';
import { Endpoints, Mock } from '@mocking';

fixture('Testcafe example page: pass')
    .beforeEach(async t => {
        await Mock.endpoint(Endpoints.FIRST_ENDPOINT, 'default');
    });

test('Open', async t => {

    // When testcafe example page is opened
    await TestcafePage.open();

    // Then input is empty
    await t.expect(await TestcafePage.$.input.innerText).eql('');

});
