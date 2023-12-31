import express from 'express';
import configViewEngine from './src/config/viewEngine';
import initApiRoutes from './src/routes/api';
import bodyParser from 'body-parser';
const http = require('http');
const webSocket = require('./src/until/webSocket');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;

const server = http.createServer(app);
webSocket(server);

configViewEngine(app);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

initApiRoutes(app);
// connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(PORT, () => {
    console.log(`WebSocket server listening on port ${PORT}`);
});
