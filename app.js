const express = require('express');

const app = express();

app.use(express.static('public'));
app.listen(process.env.PORT || 8080, () =>
{
console.log('Welcome to Heroku!');
});

app.get('',(request, response) =>
{
response.send('Welcome To Get Requests!!!');
})