const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app
  .use(express.static('public'))
  .use('/dist/client', express.static('dist/client'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

app.listen(port, () => console.log(`server.js: http://localhost:${port}`)) // eslint-disable-line no-console
