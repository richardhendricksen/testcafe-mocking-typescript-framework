import { Selector, t } from 'testcafe';
import { TestrunConfig } from '../config/testrun-config';

export class TestcafePage {

    static $ = new class {
        input = Selector('#developer-name');
    };

    static async open(): Promise<void> {
        await t.navigateTo(TestrunConfig.getConfig().baseUrl.app);
        await this.$.input.with({visibilityCheck: true})();
    }
}
