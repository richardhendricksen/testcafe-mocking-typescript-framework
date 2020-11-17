import createTestCafe from 'testcafe';

function registerTsconfigPaths() {
    const tsConfigPaths = require("tsconfig-paths");
    return tsConfigPaths.register({ baseUrl: "./", paths: require('../tsconfig.json').compilerOptions.paths });
}

process.env.ALLURE_RESULT_DIR = '/.reports/allure/allure-results';

async function run(): Promise<void> {
    registerTsconfigPaths();

    const t = await createTestCafe();

    const runner = t.createRunner();

    const failedCount = await runner
        .src(['tests/**/*.spec.ts'])
        .browsers('chrome:headless')
        .screenshots('screenshots', true)
        .reporter(['spec', 'allure'])
        .tsConfigPath('tsconfig.json')
        .run({quarantineMode: true});

    await t.close();

    console.log('Tests failed: ' + failedCount);
    if (failedCount !== 0) {
        process.exit(1);
    } else {
        process.exit(0);
    }
}

void run();
