const express = require("express");
const res = require("express/lib/response");
const app = express();
const bodyPaser = require('body-parser')

//Estou dizendo para o Express usar EJS como View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyPaser.urlencoded({extended: false}));
app.use(bodyPaser.json);

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/ask', (req, res) => {
    res.render('ask')
});

app.post('/storeAsk', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    res.send("FormularioRecebido")
});

app.listen(8080, () => {
    console.log('App rodando!')
});