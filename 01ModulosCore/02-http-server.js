// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var http = require('http') // Con require vamos a llamar al módulo interno de Node en cuestión. 

const hostname = '127.0.0.1';

function webServer(req, res)
{
// En este caso, no será texto plano. Vamos a enviar código HTML
    res.writeHead(200, {'Content-Type':'text/html'}).end('<h1>Hola Node.js</h1>')
}

http
    .createServer(webServer)
    .listen(3000, hostname)

console.log(`Servidor corriendo en http://${hostname}:3000/`)
