#!/bin/bash

REPORT=$1
FULL_NAME=$2
FILE=$3
EXIT_CODE=$4

if [ "$EXIT_CODE" -eq "0" ]; then
  RESULT="PASSED"
else
  RESULT="FAILED"
fi

S3_LINK="https://<my bucket>>.s3-eu-west-1.amazonaws.com/builds/${BITBUCKET_BRANCH}/${BITBUCKET_BUILD_NUMBER}/${FILE}"

curl --proxy 'http://localhost:29418' --request PUT "http://api.bitbucket.org/2.0/repositories/$BITBUCKET_REPO_OWNER/$BITBUCKET_REPO_SLUG/commit/$BITBUCKET_COMMIT/reports/$REPORT" \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "title": "'"${FULL_NAME}"'",
    "details": "Open report using link above",
    "report_type": "SECURITY",
    "reporter": "Reporter",
    "link": "'"${S3_LINK}"'",
    "result": "'"${RESULT}"'"
}'
