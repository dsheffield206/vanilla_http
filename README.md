### Code Fellows D49 Week 2 Assignment - Write A Vanilla HTTP Server

#### Write A Vanilla HTTP Server - Summary
+ This is project creates a simple, vanilla HTTP server that responds to several different client requests.
+ This server responds to a client request to /time, sending back the current time of the server.
+ This server responds to a GET request to /greet/name, sending back a response string that greets that name.
+ This server also separates a POST request to /greet that takes the name in JSON format.
+ http_server.js represents the server file.
+ We are using [SuperAgent](https://visionmedia.github.io/superagent/#test-documentation) by Vision Media.
+ test/test.js includes a Mocha / Chai tests.
