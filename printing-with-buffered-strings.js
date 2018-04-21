var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

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

getAndPrintHTML();



