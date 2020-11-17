const ALLURE_RESULT_DIR = process.env.ALLURE_RESULT_DIR || process.abort();

console.log(ALLURE_RESULT_DIR);

const DOC_ALLURE_CONFIG = {
  RESULT_DIR: ALLURE_RESULT_DIR,
  META: {
    STORY_ID: 'STORY',
    TEST_ID: 'ID',
    SEVERITY: 'SEVERITY',
    TEST_RUN: 'TEST_RUN'
  },
  STORY_LABEL: 'JIRA Story Link',
  STORY_URL: 'https://jira.example.ca/browse/{{ID}}',
  TEST_LABEL: 'JIRA Test Link',
  TEST_URL: 'https://jira.example.ca/secure/Tests.jspa#/testCase/{{ID}}',
  labels: {
    screenshotLabel: 'Screenshot',
    browserLabel: 'Browser',
    userAgentLabel: 'User Agent',
    allureStartMessage: 'Allure reporter started...',
    allureClosedMessage: 'Allure reporter closed...'
  }
};

module.exports = DOC_ALLURE_CONFIG;
