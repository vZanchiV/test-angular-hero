var express = require('express')


const app  = express();
app.get('/', function(request,reponse) {
    // eslint-disable-next-line no-undef
    reponse.sendFile(__dirname + "/public/index.html");
    app.use('/dist',express.static('dist'))
})
app.listen(8080);
