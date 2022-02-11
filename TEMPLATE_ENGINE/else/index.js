// npm i express-handlebars
const express = require('express');
const exphbs = require('express-handlebars'); // exphbs eh a abreviação

const port = 3000;

const app = express();

app.engine('handlebars', exphbs.engine()) // definindo o handlebars como template engine
app.set('view engine', 'handlebars') // setando o hbs 


app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {    
    const user = {
        name: "Vitor",
        username: "Silvestredev"
    }; // criando uma const 'user' para enviarmos ao frontend
       
    const auth = true;
    const approved = true;

    res.render('home', { user: user, auth, approved }); //enviando o user.
});

app.listen(port, () => {
    console.log('Rodando...')
});