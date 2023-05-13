// // const http = require("http")

// // const server = http.createServer((req, res) => {
// //     res.end('Hello')
// // })

// // server.listen(3000)
// import respond from "./src/responder.js";
import express from "express";

// const app = express()

// // app.get('/', (req, res) => {
// //     res.send("Hello from express with nodemon")
// // })

// app.get('/', (req, res) => {
//     // res.sendFile('pages/index.html', {root: './src'})
    
// })

// app.post('/seacrh', (req, res) => {
//     res.send(req.body)
// })


import hbs from "hbs"
import path from "path"

const __dirname = path.resolve()
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')

hbs.registerPartials(path.join(__dirname, 'views/partials'))



app.get('/', (req, res) => {
    res.render('brief', { mainTitle: "Brief"})
})
app.get('/brief', (req, res) => {
    res.render('brief', {mainTitle: "Brief"})
})

app.get('/bio', (req, res) => {
    res.render('bio', { mainTitle: "Bio"})
})
app.get('/activity', (req, res) => {
    res.render('activity', {mainTitle: "Activity"})
})
app.get('/links', (req, res) => {
    res.render('links', { mainTitle: "Links"})
})

app.listen(3000, () => {
    console.log('express start')
})