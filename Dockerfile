FROM circleci/node:12-browsers-legacy
COPY . /testcafe
USER root
WORKDIR /testcafe
RUN yarn install --frozen-lockfile
