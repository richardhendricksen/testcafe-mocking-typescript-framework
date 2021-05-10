FROM circleci/node:12-browsers

COPY --chown=circleci package.json /runner/package.json
COPY --chown=circleci yarn.lock /runner/yarn.lock

WORKDIR /runner

# Install node dependencies in parent folder of our framework, this prevents them from being overwritten by the hosts node_modules folder
RUN yarn install --frozen-lockfile

ENV PATH=/runner/node_modules/.bin:$PATH

WORKDIR /runner/framework
