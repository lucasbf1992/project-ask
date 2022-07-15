const express = require("express");
const res = require("express/lib/response");
const app = express();

//Estou dizendo para o Express usar EJS como View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/ask', (req, res) => {
    res.render('ask')
});

app.listen(8080, () => {
    console.log('App rodando!')
});