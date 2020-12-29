FROM node:current-slim
WORKDIR /app
COPY ./app /app
RUN chmod +x ./run_tests.sh
RUN npm install
USER node
CMD npm start
EXPOSE 5000