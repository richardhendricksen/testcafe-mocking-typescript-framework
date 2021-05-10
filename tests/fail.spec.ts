import { TestcafePage } from '@po';
import { Endpoints, Mock } from '@mocking';

fixture('Testcafe example page: fail')
    .beforeEach(async t => {
        await Mock.endpoint(Endpoints.FIRST_ENDPOINT, 'default');
    });

test('Open', async t => {

    // When testcafe example page is opened
    await TestcafePage.open();

    // Then input is not empty
    await t.expect(await TestcafePage.$.input.innerText).eql('bar');
});
