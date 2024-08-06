
const express = require('express');
const app = express()
const bodyparser = require('body-parser')
const port = 3003

app.use(bodyparser.json());

app.post('/convo', (req, res) => {

    console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})