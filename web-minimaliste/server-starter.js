const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hello world!')
})

server.listen(3000, () => {
  console.log('Listening on http://localhost:3000/')
})
