const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('<h1>hello wordl</h1>');

});


app.use('/api/accounts', require('./api/accounts'));
// app.use('/api/functions', require('./api/functions'));

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);

});