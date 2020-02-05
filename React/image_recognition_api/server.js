const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('this is working');
})

app.listen(3001, () => {
  console.log('app is running on port 3001');
})


/*

routes
/ --> res = this is working
/signin --> POST = with success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT = updated user

*/
