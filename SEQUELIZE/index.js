const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const app = express();
const port = 3000;

const User = require('./models/User')
const Address = require('./models/Address')


app.engine('handlebars', exphbs.engine());

app.set('view engine', 'handlebars');
app.use(express.static('public')); //ponte para os arquivos estáticos (CSS)

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.post('/users/update', async(req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if(newsletter === 'on') {
        newsletter = true;
    }  else {
        newsletter = false;
    }


    const userData = {
        id,
        name,
        occupation,
        newsletter
    };

    await User.update(userData, {where: {id: id}})

    res.redirect('/')
    
})

app.get('/', async (req, res) => {
    const users = await User.findAll({raw: true}) //tranformando o objeto em array
    
    console.log(users)

    res.render('home', {users : users});
});

app.get('/users/create', (req, res) =>{
    res.render('adduser')
})

app.get('/users/:id', async (req, res) => { //renderizando user específico 
    const id = req.params.id;
    const user = await User.findOne({raw: true, where: {id : id}})

    res.render('userview', { user })
})


app.post('/users/create', async (req, res) => { //criando user
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter; // checked = on;

    if(newsletter === 'on'){
        newsletter = true
    } else {
        newsletter = false
    }

   await User.create({name, occupation, newsletter}); // esperando a criação do User para redirecionar

    res.redirect('/')

})


app.post('/users/delete/:id', async(req, res) => { //deletando user
    const id = req.params.id;

    await User.destroy({where: {id : id}})

    res.redirect('/')
})

app.get('/users/edit/:id', async(req, res) => { //deletando user
    const id = req.params.id;

    const user = await User.findOne({include: Address, where: {id : id}})

    .then((user) => {
        res.render('useredit', { user: user.get({ plain: true }) })
      })
      .catch((err) => console.log(err))
})

app.post('/address/create', function (req, res) {
    const UserId = req.body.UserId
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city
  
    const address = {
      street,
      number,
      city,
      UserId,
    }
  
    Address.create(address)
      .then(res.redirect('/'))
      .catch((err) => console.log(err))
  })




conn.sync() //criando a table 
.then(() => {
    app.listen(port)
})
.catch((err) => console.log(err))