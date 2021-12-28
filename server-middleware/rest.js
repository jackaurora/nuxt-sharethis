const bodyParser = require('body-parser');
const app = require('express')();
const { v4 } = require('uuid');
const sessionstorage = require('sessionstorage');

app.use(bodyParser.json())

app.get('/sharers', (req, res) => {
  const sharers = sessionstorage.getItem('sharers') || [];
  
  const id = getParameterByName('id', req.headers.referer);
  console.log("reqid", id, sharers.filter(s => s.id === id));

  res.json({ 
    data: sharers,
    selector: id && id.length ? sharers.find(s => s.id === id) : {}
  });
})

app.post('/sharers', (req, res) => {
  const sharers = sessionstorage.getItem('sharers') || [];

  const id = v4();
  sharers.push({
    id: id,
    text: req.body.text,
    el: req.body.el
  });

  sessionstorage.setItem('sharers', sharers);

  res.json({ id: id, text: req.body.text, el: req.body.el });
})


function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export default {
  path: '/api',
  handler: app
}