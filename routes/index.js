const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
var router = express.Router()
router.use(bodyParser())
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

router.get('/', (req, res, next) => {
    res.render('index.hbs')
})
router.post('/prog', (req, res, next) => {
    let constant_name = req.body.name
    console.log(constant_name)
    let read = fs.readFileSync(`./assets/${constant_name}.txt`, 'utf-8', (err, data) => {
        if (err) console.log(`Can't read : ./assets/${constant_name}.txt`, err)
    })
    res.render('index.hbs', {
        constant_data: Array.prototype.slice.call(read),
        constant_name : constant_name
    })
    
})

module.exports = router