// npm i express-handlebars
const express = require('express');
const exphbs = require('express-handlebars'); // exphbs eh a abreviação

const port = 3000;

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine) // definindo o handlebars como template engine
app.set('view engine', 'handlebars') // setando o hbs 

app.use(express.static('public'));

app.get('/poster', (req, res) => {

    const post = {
        titulo: 'NODEJS',
        categoria: 'JS',
        corpo: 'Aprender nodeJS',
        comentarios: 4
    };

    res.render('poster', {post})
});

app.get('/blog', (req, res) => {
    const posts = [{
        titulo: 'NODEJS',
        categoria: 'JS',
        corpo: 'Aprender nodeJS',
        comentarios: 4
    }, {
        titulo: 'PHP',
        categoria: 'PHP',
        corpo: 'Aprender PHP',
        comentarios: 4
    },
    {
        titulo: 'PYTHON',
        categoria: 'PY',
        corpo: 'Aprender Python',
        comentarios: 4
    }];

    res.render('blog', {posts})
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {    
    const user = {
        name: "Vitor",
        username: "Silvestredev",
        age: '19'
    }; // criando uma const 'user' para enviarmos ao frontend
       
    const auth = true;
    const approved = true;

    res.render('home', { user: user, auth, approved }); //enviando o user.
});

app.listen(port, () => {
    console.log('Rodando...')
});