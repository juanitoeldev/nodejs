import { createServer } from 'node:http';
// configuramos el servidor
const hostname = 'localhost'; 
const port = 3000; 
// creamos el servidor
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo');
});
// iniciamos el servidor
server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});