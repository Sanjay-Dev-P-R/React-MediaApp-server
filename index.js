// 1 import json server 
const jsonServer = require('json-server')

// 2 create a server using json server
const mediaPlayerServer = jsonServer.create()

// 3 setup path for the server
const router = jsonServer.router("db.json")

// 4 return middleware used bt json server
const middleware = jsonServer.defaults()//json->js

// 5 setup the path port number
const port = 4000 || process.env.port

// 6 use middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


// 7 listen server for resolving request from client 
mediaPlayerServer.listen(port,()=>{
    console.log('listening on port '+port);
})