#!/bin/bash

REPORT_DIR=$1
S3_TARGET_DIR=$2

docker run --rm \
-e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
-e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
-e AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION \
-e BITBUCKET_BRANCH=$BITBUCKET_BRANCH \
-e BITBUCKET_BUILD_NUMBER=$BITBUCKET_BUILD_NUMBER \
-v $(pwd):/aws \
amazon/aws-cli \
s3 cp ${REPORT_DIR} s3://<mybucket>/builds/${BITBUCKET_BRANCH}/${BITBUCKET_BUILD_NUMBER}/${S3_TARGET_DIR} --recursive --no-progress --acl public-read --region ${AWS_DEFAULT_REGION} # copy report to S3 bucket
