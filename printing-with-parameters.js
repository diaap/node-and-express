var https = require('https');

function getAndPrintHTML (options) {
//when you're declaring the function, you have a vague name for the literal argument
//that you pass in when you call the function at the bottom
//whereever the standin for the argument is used inside the function, its also being replaced
  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      var bufferedData = "";
      for (var i = 0; i < data.length; i++) {
        bufferedData += data[i];
      }

      console.log(bufferedData);
    });

    response.on('end', function() {

      console.log('Response stream complete.');
    });

  });

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);