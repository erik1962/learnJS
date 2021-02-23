//import { createServer } from 'http';
import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hello New World\n');
}); 

server.listen(4242, () => {
    console.log('Server is running...');
});