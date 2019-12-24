'use strict'
const fastify = require('fastify')()
const { exec } = require('child_process')

fastify.register(require('fastify-helmet'))
fastify.use(require('cors')())

fastify.post('/problems/1', {
    schema: {
        body: {
            type: 'object',
            required: ['numLevels'],
            properties: {
                numLevels: {
                    type: 'integer',
                    minimum: 1,
                    maximum: 9
                }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    output: {
                        type: 'string'
                    }
                }
            }
        }
    }
}, (req, reply) => {
    exec(`cd programs; ./prog1 ${req.body.numLevels}`, (error, stdout, stderr) => {
        if (error || stderr) {
            console.log('error: ' + error)
            console.log('stderr: ' + stderr)
        } else {
            console.log(stdout)
            reply.send({
                output: stdout
            })
        }
    })
})

fastify.post('/problems/2', {
    schema: {
        body: {
            type: 'object',
            required: ['points'],
            properties: {
                points: {
                    type: 'array',
                    minItems: 1,
                    items: {
                        type: 'object',
                        required: ['x', 'y', 'z'],
                        properties: {
                            x: {
                                type: 'number'
                            },
                            y: {
                                type: 'number'
                            },
                            z: {
                                type: 'number'
                            }
                        }
                    }
                }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    output: {
                        type: 'string'
                    }
                }
            }
        }
    }
}, (req, reply) => {
    exec(`cd programs; ./prog2 input3d.txt`, (error, stdout, stderr) => {
        if (error || stderr) {
            console.log('error: ' + error)
            console.log('stderr: ' + stderr)
        } else {
            console.log(stdout)
            reply.send({
                output: stdout
            })
        }
    })
})

fastify.listen(3000, (err, address) => {
    if (err) throw err
    console.log(`Server listening at ${address}`)
})