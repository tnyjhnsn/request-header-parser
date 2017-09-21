var app = require('../manager.js').getApp(__dirname)

app.get('/', function(req, res) {
    let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress
    let language = req.headers['accept-language'].split(',')[0]
    let software = (/\(([^)]+)\)/).exec(req.headers['user-agent'])[1]
    let result = {
        'ipaddress': ip,
        'language': language,
        'software': software
    }
    res.send(result)
})
