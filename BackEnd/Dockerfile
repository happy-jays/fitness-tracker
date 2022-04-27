FROM node:18
WORKDIR /Backend
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
RUN export NODE_OPTIONS=--openssl-legacy-provider && yarn build && yarn install --production --ignore-scripts --prefer-offline
CMD ["npm", "run", "start"]