const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client'));
//setup enviroment variables
app.set( 'port', ( process.env.PORT || 3000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
