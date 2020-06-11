const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))
.listen(PORT || 8080, () =>
{
console.log('Welcome to Heroku!');
});

app.get('',(request, response) =>
{
response.send('Welcome To Get Requests!!!');
})