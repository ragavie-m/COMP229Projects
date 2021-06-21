//node js server pasted here from node.js website
const http = require('http');

const hostname = '127.0.0.1'; //localhost IP address
const port = 3000; //if running port, here is where you would change to set up server again

//creating a server object, sending request and response
// the => is a function, callinganother function inside the create server which will do nect 3 lines

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello loosu!');
});

//after set up server, need to activate/call the server
//activating the http package
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//node.js is event-run fuctionality so when send req, get res immediately
//activate sever and res in console log when that happens

//run server by "node index.js" in the terminal
//to make changes, stop server with cntrl+c in terminal

//"npm install -g nodemon" will install nodemon globally - did this
//"nodemon" in termial will have many commands but server will be running, if you go back make hanges and click cntrl+s to save, server will continue by itself
//then referesh browser to see changes, dont need to restart esver every time