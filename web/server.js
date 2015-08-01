var https = require('https'),
  http = require('http'),
  fs = require ('fs');

var sslOptions = {
  key: fs.readFileSync('cert/web.key.pem'),
  cert: fs.readFileSync('cert/web.crt.pem'),
  requestCert: false,
  rejectUnauthorized: true
};

// Health Check
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('OK');
}).listen(80, '0.0.0.0');

function serve(ip, port) {
  https.createServer(sslOptions, function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var server = process.env.MACHINE + ":" + port;
    res.write("<h2>Hello " + req.headers['x-forwarded-for'] + "!");
    res.write("<h2>Welcome to " + server + "!</h2>");
    res.end();
  }).listen(port, ip);
}

serve('0.0.0.0', 4443);
serve('0.0.0.0', 4444);
