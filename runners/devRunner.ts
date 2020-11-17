import createTestCafe from 'testcafe';
import { TestrunConfig } from '../config/testrun-config';
import {config} from '../config/it-config';
import { registerTsconfigPaths } from '../config/register-tsconfig-paths';

process.env.ALLURE_RESULT_DIR = '/.reports/allure/allure-results';

async function run(): Promise<void> {
    registerTsconfigPaths('../tsconfig.json');
    TestrunConfig.setConfig(config);

    const t = await createTestCafe();

    const runner = t.createRunner();

    const failedCount = await runner
        .src(['tests/**/*.spec.ts'])
        .browsers('chrome --autoplay-policy=no-user-gesture-required')
        .screenshots('screenshots', true)
        .reporter(['spec', 'allure'])
        .tsConfigPath('tsconfig.json')
        .run({
            debugOnFail: true
        });

    await t.close();

    console.log('Tests failed: ' + failedCount);
    if (failedCount !== 0) {
        process.exit(1);
    } else {
        process.exit(0);
    }
}

void run();
