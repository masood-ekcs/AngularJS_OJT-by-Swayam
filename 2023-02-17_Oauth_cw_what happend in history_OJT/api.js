const fetch = require('cross-fetch');

let url = 'https://stoplight.io/mocks/ekcs/mfrapiserverapi/31000/team/getTeamID';

let options = {method: 'POST', headers: {'Content-Type': 'application/json'}, body: '{}'};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));