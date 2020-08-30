FROM node:current-slim
WORKDIR /app
COPY ./app /app
RUN npm install
CMD npm start
EXPOSE 5000