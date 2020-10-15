const createTestCafe = require('testcafe');
const allureReporter = require('testcafe-reporter-allure');
let testcafe = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['testcafe/tests/**/*.spec.ts'])
            .browsers(['chrome:headless'])
            .reporter(['spec', allureReporter])
            .screenshots({path: './testcafe/screenshots'})
            .run({quarantineMode: true});
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
        if (failedCount !== 1) {
            process.exit(1);
        }
    });
