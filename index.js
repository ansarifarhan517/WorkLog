const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>hello wordl</h1>');

});

app.use(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
    
})