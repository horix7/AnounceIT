import express from 'express';
import anouncementEnds from './controllers/anounceController';
const app = express();

import { urlencoded, json } from 'body-parser';
import userEndpoint from './controllers/userControlers';
import anounceEndpoint from './controllers/anounceController';

app.use(urlencoded({ extended: false}));
app.use(json());

app.get('/', (req, res) => {
  return res.status(200).send({'messagge' : 'welcome to  anounce it' });
})

app.post('/api/v1/auth/signup', userEndpoint.userSignUp);
app.post('/api/v1//auth/signin', userEndpoint.userSignIn);
app.get('/api/v1/allusers', userEndpoint.getAllUsers);
app.get('/api/v1/oneuser', userEndpoint.getOneUser);
app.post('/api/v1/announcement', anounceEndpoint.createAnounment);
app.put('/api/v1/anouncement/:id', anounceEndpoint.updateAnouncement);
app.get('/api/v1/announcements', anounceEndpoint.getAllAnouncement);
app.get('/api/v1/announcement/:id', anounceEndpoint.getOneAnouncement);
app.get('/api/v1/announcement/:status', anounceEndpoint.getAnounceByStatus);
app.put('/api/v1/announcement/status', anounceEndpoint.changeAnounceStatus);
app.delete('/api/v1/announcement/:id', anounceEndpoint.deleteAnouncement);

const port = process.env.PORT || 8080;

app.listen(port)

