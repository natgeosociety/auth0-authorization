# Base image
FROM node:10.15 as base
WORKDIR /app
# Install dependencies only when package.json changes
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install


# Test
FROM base as tester
COPY tsconfig.json tsconfig.json
COPY tsconfig.test.json tsconfig.test.json
COPY src src
CMD npm test


# Build
FROM base as builder
COPY tsconfig.json tsconfig.json
COPY tsconfig.build.json tsconfig.build.json
COPY src src
RUN npm run build


# Publish
FROM builder as publisher
ARG npm_token
RUN test ${npm_token}
RUN echo "//registry.npmjs.org/:_authToken=${npm_token}" > .npmrc
COPY --from=builder /app/lib /app/lib
CMD npm publish --access public
