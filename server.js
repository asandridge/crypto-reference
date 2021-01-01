const express = require('express')
const path = require('path')
const app = express()
var request = require('request');

app.use(express.static(path.join(__dirname, 'build')))

app.get('/get_currency_data', (req, res) => {

  const NOMICS_KEY = process.env.REACT_APP_NOMICS_KEY

  const now = new Date();
  const endDate = now.toISOString().substring(0, 10);
  let startDate = now;
  startDate.setFullYear(now.getFullYear() - 10);
  startDate = startDate.toISOString().substring(0, 10);
  const url = `https://api.nomics.com/v1/exchange-rates/history?key=${NOMICS_KEY}&currency=${req.body.coinType}&start=${startDate}T00%3A00%3A00Z&end=${endDate}T00%3A00%3A00Z`;

  request(url, function (error, response, body) {
    if (error) {
      console.log(error) // Print the google web page.
    } else {
      res.send(body)
    }
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

.listen(process.env.PORT || 8080)
