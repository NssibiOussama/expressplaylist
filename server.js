const http = require('http');
const url = require('url');
const queryString = require('querystring');
const express = require('express')
app = express()
const server = http.createServer((req, res) => {
    var params = queryString.parse(url.parse(req.url).query);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if('id' in params && 'login' in params) {
    res.write('id: ' + params['id'] + ' login: ' + params['login']);
  }
  else {
    res.write('Vous devez bien avoir un identifiant et un login non ?');
  }
  res.end();
});

app.get('/api/employees',(req,res)=>{
    res.send(['Oussama','Mahdi','Amir'])
})
server.listen(3000, () => console.log('Server running on port 3000'));