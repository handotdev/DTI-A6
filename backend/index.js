const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

let data = [];

app.use(bodyParser.json());

app.get('/api/contact-cards', (_, resp) => {
  // this line is added to ensure the loading message is displayed correctly
  // we should probably also let students do that.
  setTimeout(() => resp.json(data), 1000);
});

app.post('/api/add-contact-card', (req, resp) => {
  const card = req.body;
  if (data.some(c => c.email === card.email)) {
    resp.status(200).send('NOT_OK');
  } else {
    data.push(card);
    resp.status(200).send('OK')
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
