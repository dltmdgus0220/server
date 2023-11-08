const express = require('express');
const app = express();
const cors = require('cors');

let corsOptions = {
    origin: 'http://localhost:8081',
    credentials: true
}

app.use(cors(corsOptions));

app.listen(8080, ()=>{
    console.log('server on');
})

app.get('/hello', (req, res) => {
    res.send({ some: 'json' });
})