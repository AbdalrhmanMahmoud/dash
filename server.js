var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath:'./dist',
  port:8000
})
server.start(function(){
  console.log("we are live", server.port)
})