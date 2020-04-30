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

app.get('/model',(req, res) => {
  let answer = fs.readFileSync('./convert.txt', 'utf8');
  answer = createQuestions(convert(answer)).join('');
  fs.writeFileSync('./model.cs', answer);
  res.json(answer);
});

app.get('/loadQuestions', (req, res) => {
  let answer = fs.readFileSync('./convert.txt', 'utf8');
  answer = createLoadQuestions(convert(answer)).join('');
  fs.writeFileSync('./loadQuestions.cs', answer);
  res.json(answer);
});

app.get('/QuestionText', (req, res) => {
  let answer = fs.readFileSync('./convert.txt', 'utf8');
  answer = createQuestionText(getDescription(answer), convert(answer)).join('');
  fs.writeFileSync('./questionText.cs', answer);
  res.json(answer);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

function convert(answer) {
  return answer.split('"').filter( line => {return !test(line)});
}

function getDescription(answer) {
  return answer.split('Description(').map(line => line.substring(0, line.indexOf(')]')) );
}

function createQuestions(array) {
  return array.map( line => {
    return `public bool Show${line} { get; set; }\r\n`
  })
}

function createQuestionText(array, questions) {
  return array.filter( (line, index) => index).map( (line, index) => {
    console.log('line', line);
    return `case AllStateG100Question.${questions[index]}:
                    l_Ret = ${line};
                    break;\r\n`
  })
}

function createLoadQuestions(array) {
  return array.map( line => {
    return ` if (AskHealthQuestion(AllStateG100Question.${line}))
            {
                _EnrollModuleAllStateG100Model.Show${line} = true;
            }\r\n`
  })
}

function test(line){
  return (/[a-z\s]/.test(line));
}
