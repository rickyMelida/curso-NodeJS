let http = require('http');

let servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
        `<!doctype html><html><head></head>
        <body><h1>Hola Mundo</h1></body></html>`
    );

    res.end;
});

servidor.listen(27000);

console.log('Servidor corriendo');
