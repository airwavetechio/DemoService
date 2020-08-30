## Connect
```
minikube ip && kubectl -n istio-system get service istio-ingressgateway -o jsonpath={.spec.ports[?(@.name==\"http2\")].nodePort}
```

## canary
This directory contains files that will help you deploying split traffic routing using a combination of spinnaker and Istio rules. 


## standard
Just apply the files in here and hit the web site at the ingress IP and port. No fancy traffic routing. 



## To test the split routing
`for ((i=1;i<=100;i++)); do   curl -s "http://<minikube ip>:<port>/"`
`for ((i=1;i<=1000;i++)); do   curl -s "http://192.168.99.100:32637"`