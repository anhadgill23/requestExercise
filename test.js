

// require `request` and the Node `fs` (filesystem) module

// If you don't, please ensure these steps are complete before proceeding.
// Create a new .js file and using request, make a 'GET' request to 'https://sytantris.github.io/http-examples/future.jpg' using chaining. The chain should:
// Use .on('error') to handle any errors
// Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
// Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')

var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Message: ', response.statusCode);
         console.log('Content Type: ', response.headers['content-type'])
       })
       .on('end', function (end) {
        console.log('Download complete.')
       })
       .pipe(fs.createWriteStream('./downloaded.html'));