const express = require('express');

const app = express();

// middleware - user postman to send a request
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('getting root'); 
});

app.get('/profile', (req, res) => {
  res.send('getting profile'); 
});

app.post('/profile', (req,res) => {
  console.log(req.body);
  const user = {
    name: 'Sally',
    hobby: 'football'
  }
  // res.send(user); // express automatically does json stringify
  res.send('success');
})

app.listen(3002);
