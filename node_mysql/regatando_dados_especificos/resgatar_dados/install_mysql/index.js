// npm i mysql
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.engine('handlebars', exphbs.engine());

app.set('view engine', 'handlebars');
app.use(express.static('public')); //ponte para os arquivos estáticos (CSS)

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/books/cadastrolivros', (req, res) => {
    const title = req.body.title;
    const pages = req.body.pages;

    const sql = `INSERT INTO books (title, pages) VALUE('${title}','${pages} ')`
    connection.query(sql, (err) => {
        if(err) {
            console.log(err);
        }
        res.redirect('/');
    })
});

app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books"
    connection.query(sql, (err, data) => {
        if(err) {
            console.log(err)
            return
        }

        const books = data;

        console.log(books)

        res.render('books', { books })
    })

})


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

connection.connect(function(err) {
    if(err){
        console.log(err);
    };
    console.log('Conectado ao MySQL');
    app.listen(port);
});
