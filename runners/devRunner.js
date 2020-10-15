const createTestCafe = require('testcafe');
const allureReporter = require('testcafe-reporter-allure');
loadTsConfigPaths();
let testcafe = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['tests/**/*.spec.ts'])
            .browsers('chrome --autoplay-policy=no-user-gesture-required')
            .screenshots({
                takeOnFails: true
            })
            .reporter(['spec', allureReporter])
            .tsConfigPath('tsconfig.json')
            .run({
                debugOnFail: false
            });
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
        if (failedCount !== 0) {
            process.exit(1);
        } else {
            process.exit(0);
        }
    });


function loadTsConfigPaths() {
    const tsConfigPaths = require("tsconfig-paths");
    return tsConfigPaths.register({ baseUrl: "./", paths: require('../tsconfig.json').compilerOptions.paths });
}
