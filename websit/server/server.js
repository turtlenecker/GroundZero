const http = require('http')
const port = 3000

const server = http.createServer(function(req, res){
res.write('hi')
})

server.listen(port, function(error) {
  if (error) {
      console.log('oops somthing went wrong', error)
  } else {
      console.log('server is listening on port' + port)
  }
})
