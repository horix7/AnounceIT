import express from 'express';
const app = express();

const bodyParser = require('body-parser');
const userEndpoint = require('./controllers/userControlers').default;
const anounceEndpoint = require('./controllers/anounceController');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/api/v/anouncement', (req,res) => {
    res.send(user)
})


app.get('/', (req, res) => {
  return res.status(200).send({'messagge' : 'message working yay ' });
})

app.post('/api/v/auth/signup', userEndpoint.userSignUp);
app.post('/api/v//auth/signin', userEndpoint.userSignIn);
app.get('/api/v/allusers', userEndpoint.getAllUsers);
app.get('/api/v/oneuser', userEndpoint.getOneUser);
app.post('/api/v/announcement', anounceEndpoint.createAnounment);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listenning to port ${port}.. ..... .....`))
