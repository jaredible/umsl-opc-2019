const http = require('http')
const router = require('find-my-way')()
const { exec } = require('child_process')

router.on('GET', '/', (req, res, params) => {
    exec('./problems/prog1', (error, stdout, stderr) => {
        console.log(stdout)
    })
    res.end('{"message":"hello world"}')
})

const server = http.createServer((req, res) => {
    router.lookup(req, res)
})

server.listen(3000, err => {
    if (err) throw err
    console.log('Server listening at http://localhost:3000')
})