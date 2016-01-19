var fileUri = __dirname + (process.argv[3] || "/index.html"),
    port = Number(process.argv[2]) || 9000,
    express = require('express'),
    app = express(),
    server = require('http').createServer(app);

server.listen(port, console.log.bind(console, 'Node running in http://localhost:' + port));

// Middlewares
app.use(express.static(__dirname + '/vendors'));
app.use(express.static(__dirname + '/elements'));

// Routes
app.get('/',function(req, res){
    res.sendfile(fileUri);
});