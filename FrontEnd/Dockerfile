FROM node:16
WORKDIR /Frontend
COPY package.json ./
ENV MYSQL_ROOT_PASSWORD=happy&2001
RUN npm install
COPY ./ ./
CMD ["npm", "run", "start"]