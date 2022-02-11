// npm i express-handlebars
const express = require('express');
const exphbs = require('express-handlebars'); // exphbs eh a abreviação

const port = 3000;

const app = express();

app.engine('handlebars', exphbs.engine()) // definindo o handlebars como template engine
app.set('view engine', 'handlebars') // setando o hbs 

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log('Rodando...')
});