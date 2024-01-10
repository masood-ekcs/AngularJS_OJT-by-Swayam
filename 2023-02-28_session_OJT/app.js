const express = require('express')
const app = express()
const session = require('express-session')

// Server side pe ek table bana dega. 

// User1   {name: "Ayush", "Age": 30, "lol": 34} 
// User2   {name: "Sunil", "Age": 30, "lol": 56}




app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))




app.get("/", (req, res) => {
    res.send("Hello, this is Development Team")
})



// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠ S E R V E R
const port = 3000
// const port = process.env.PORT || 3000
app.listen(port, (err) => { (err) ? console.log(err) : console.log("Server is running on http://localhost:" + port) })