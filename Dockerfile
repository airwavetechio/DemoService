FROM node:current-slim
WORKDIR /app
COPY ./app /app
RUN chmod +x ./run_tests.sh
RUN npm install
CMD npm start
EXPOSE 5000