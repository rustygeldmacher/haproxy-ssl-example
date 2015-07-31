var http = require('http');

function serve(ip, port)
{
  http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var server = process.env.MACHINE + ":" + port;
    res.write("<h2>Hello " + req.headers['x-forwarded-for'] + "!");
    res.write("<h2>Welcome to " + server + "!</h2>");
    res.end();
  }).listen(port, ip);
}

serve('0.0.0.0', 8080);
