var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      var bufferedData = "";
      for (var i = 0; i < data.length; i++) {
        bufferedData += data[i];
      }
      callback(bufferedData);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)

module.exports = {
  getHTML: getHTML,
  printHTML: printHTML
};
