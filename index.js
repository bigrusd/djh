var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

const { spawn } = require('node:child_process')

// start the command
const command = spawn('./djh.sh', )

// the `data` event is fired every time data is
// output from the command
command.stdout.on('data', output => {
    // the output data is captured and printed in the callback
    console.log("Output: ", output.toString())
})
