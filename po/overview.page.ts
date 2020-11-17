import { Selector, t } from 'testcafe';
import { TestrunConfig } from '../config/testrun-config';

export class OverviewPage {

    static $ = new class {
        welcomeText = Selector('body');
        menu = Selector('');
    };

    static async open(product: string): Promise<void> {
        await t.navigateTo(`${TestrunConfig.getConfig().baseUrl}/overview`);
        // await this.$.welcomeText.with({visibilityCheck: true})();
    }
}
