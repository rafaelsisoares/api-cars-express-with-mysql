FROM node:16.15.1

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "npm", "start" ]