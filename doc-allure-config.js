const RESULT_DIR = process.env.RESULT_DIR || '/.reports/allure/allure-results';

const DOC_ALLURE_CONFIG = {
  CLEAN_REPORT_DIR: true,
  COPY_HISTORY: true,
  RESULT_DIR: RESULT_DIR,
  REPORT_DIR: '/.reports/allure-report',
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
