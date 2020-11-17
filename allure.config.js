const ALLURE_RESULT_DIR = process.env.ALLURE_RESULT_DIR || process.abort();

module.exports = {
    RESULT_DIR: ALLURE_RESULT_DIR,
    SCREENSHOT_DIR: 'screenshots/actual',

    CLEAN_RESULT_DIR: true,
    CLEAN_REPORT_DIR: true,
    CLEAN_SCREENSHOT_DIR: true,

    ENABLE_SCREENSHOTS: true,
    ENABLE_QUARANTINE: true,
    ENABLE_LOGGING: false,
    LABEL: {
        SCREENSHOTS: {
            BASED_ON_PATH: [
                {regex: '/baseline/', label: 'Baseline'},
                {regex: '/actual/', label: 'Actual'},
                {regex: '/diff/', label: 'Diff'}
            ]
        }
    }
};
