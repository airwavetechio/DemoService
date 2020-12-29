var express = require('express');
var app = express();
var promBundle = require("express-prom-bundle");
var promclient = require('prom-client');
var collectDefaultMetrics = promclient.collectDefaultMetrics;
collectDefaultMetrics({ prefix: 'demoservice:' });
metricsMiddleware = promBundle({includeMethod: true})
app.use(metricsMiddleware);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));

app.get('/', function(request, response) {
  response.send('Welcome to the DemoService!!!\n If you see this, you have sucessfully deploy airwavetechio/demoservice')
});

app.get('/metrics', (request, response) => {
  response.set('Content-Type', promclient.register.contentType);
  response.send(promclient.register.metrics());
});

app.listen(app.get('port'),'0.0.0.0', function() {
  console.log("Node app is running on port:" + app.get('port'))
});