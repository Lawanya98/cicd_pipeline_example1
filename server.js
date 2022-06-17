const express = require('express')
const app = express()

app.use(logger)
//middleware declaration
//this is in the global level 
//this run before every one of requests


app.get('/', (req, res, next) => {
    console.log("H page")
    res.send('Home Page')
    next()
})

//middleware that is specific to a single action
app.get('/users', auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`)
    console.log("U page")
    res.send('Users Page')
})



// app.use(logger)
//if we use middle ware after requests it will not be get called
//because our requests doesn't specifically use next()

function logger(req, res, next) {
    console.log('logger before')
    next()
    console.log('logger after')
    //next is a function
    //call requests after this middleware
}

//middleware that is specific to a single action
function auth(req, res, next) {
    if (req.query.admin === 'true') {
        req.admin = true
        //pass information to the action
        next()
    } else {
        res.send('No Auth')
    }
}

app.listen(3000);