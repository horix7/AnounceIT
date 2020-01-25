import express from 'express';
const app = express();

const bodyParser = require('body-parser');
const userEndpoint = require('./controllers/userControlers').default;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// const router = require('./routes/routes')


app.get('/api/v/anouncement', (req,res) => {
    res.send(user)
})

// app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'messagge' : 'message working yay ' });
})
// 
app.post('/api/v/usersignup', userEndpoint.userSignUp);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listenning to port ${port}.. ..... .....`))
