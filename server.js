const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
const fs = require('fs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json({limit: '50mb', extended: true}));

app.use(function (req, res, next) {
  console.log('req.body', req.body);
  next();
});

app.get('/get-groups', (req, res) => {
  const answer = fs.readdirSync('./src/assets/groups/');
  res.json(answer);
});

app.post('/get-group-item', (req, res) => {
  const answer = fs.readdirSync('./src/assets/groups/' + req.body.group);
  res.json(answer);
});

app.post('/get-item-config', (req, res) => {
  const answer = JSON.parse(fs.readFileSync('./src/assets/groups/' + req.body.group + '/' + req.body.item, 'utf8'));
  res.json(answer);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
