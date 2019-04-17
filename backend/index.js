const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://cs-a6-45e06.firebaseio.com'
});

const db = admin.firestore();

const app = express();
const port = 8080;
app.use(bodyParser.json());

const data = db.collection('cards');

app.get('/api/contact-cards', async (_, resp) => {
  const cards = await data.get();
  setTimeout(() => resp.status(200).json(cards.docs.map(doc => ({ id: doc.id, ...doc.data() }))), 1000);
});


app.post('/api/add-contact-card', async (req, resp) => {
  const card = req.body;
  console.log(card);
  const cardsAdd = await data.add(card);
  setTimeout(() => resp.status(200).send(cardsAdd.id), 1000);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
