const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('./io')(server);

const cors = require('cors');
app.use(cors());

const room = require('./routes/room')(app);
app.use('/room', room);

server.listen(8080, () => {
    console.log(`server on port 8080`);
})