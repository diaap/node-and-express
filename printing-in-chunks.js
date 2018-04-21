/*
Your first function getAndPrintHTMLChunks will utilize the https library to GET a given URL.
This function should console.log each chunk of data as it is received, concatenated with a newline character ('\n')
so you can visualize each chunk.
Remember in this and each subsequent Step - you will always need to invoke (call) the function you wrote.
*/

//https is a module that gives you functionality - extends the functionality of your JS file and gives you a series of functions - get request
var https = require('https'); //someone created a module called https and its included inside node
  //you don't have to add it with npm cause its included with node- this line imports the library/package that someone else wrote -- you're using someone elses code

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

    //callback is exactly a function -- the parameter is a function in itself
  https.get(requestOptions, function (response) {
    // response is what was grabbed
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    //
    response.on('data', function (data) {
      //how do you know on exists? look at documentation for https library
      //first parameter is event, second is another callbacks
      //an event happens within the get request - calling https.get, the library in background will retrieve a website (the host) and tries to download it - it downloads it in chunks, everytime it rexieves a chunk itll invoke the callback
      //it happens (download) many times
      console.log('Chunk Received. Length:', data.length);
      console.log(data, '\n');
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      //first parameter is event, function is a callback
      //anytime we get an end event -- call this function
      console.log('Response stream complete.');
    });

  });

  //https is a package, object that you got from https package -
}

getAndPrintHTMLChunks();

