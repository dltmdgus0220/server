const express = require('express');
const app = express();

app.listen(8080, ()=>{
    console.log('server on');
})

app.get('/sw', () => {
    console.log("hello");
})