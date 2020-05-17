//install express server
const express = require('express');
const path = require('path');

const app = express();

//Serve only the static file from the dist dictionary
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, 'build', 'index.html'));

});

//start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
//app.listen(9000);