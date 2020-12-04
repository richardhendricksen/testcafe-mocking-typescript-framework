FROM circleci/node:12-browsers-legacy
# Install node dependencies in seperate folder of our framework, this prevents them from being overwritten by the hosts node_modules folder
COPY --chown=circleci package.json /testcafe/package.json
COPY --chown=circleci yarn.lock /testcafe/yarn.lock
WORKDIR /testcafe
RUN yarn install --frozen-lockfile
ENV PATH=/testcafe/node_modules/.bin:$PATH
WORKDIR /testcafe/framework
