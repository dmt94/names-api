const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
  '21 savage': {
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England',
  },
  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennet',
    'birthLocation': 'Chicago, Illinois',
  }, 
  'hunkle rap god': {
    'age': 23,
    'birthName': 'KK',
    'birthLocation': 'Hawaii Dur',
  }, 
}

//response with html
app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html'); //send file
}) //route, anon func; (req, res)


//response with json
app.get('/api/:rapperName', (request, response)=>{
  //url is part of request, this shows that parameter is in url
  const rappersName = request.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    response.json(rappers[rappersName]);
  } else {
    response.json(rappers['hunkle rap god']);
  }
  // response.json(rappers); //send json
})

app.listen(PORT, ()=>{
  console.log(`The server is running on ${PORT}! 
  You better go catch it!`);
})