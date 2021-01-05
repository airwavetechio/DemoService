FROM node:current-slim
ENV NODE_ENV production
WORKDIR /app
COPY ./app /app
RUN chmod +x ./run_tests.sh
RUN npm install
USER node
HEALTHCHECK --interval=15s --timeout=3s CMD curl -f http://localhost:5000/ || exit 1
EXPOSE 5000
CMD npm start