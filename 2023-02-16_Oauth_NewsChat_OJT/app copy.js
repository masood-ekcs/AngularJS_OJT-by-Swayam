
const express = require('express')
const app = express()
const { auth } = require('express-openid-connect')
const fetch = require('cross-fetch')
const dotenv = require('dotenv')
dotenv.config()

app.set("view engine", "ejs")
app.use(express.json())

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.secret,
    baseURL: process.env.baseURL,
    clientID: process.env.clientID,
    issuerBaseURL: process.env.issuerBaseURL
};

app.use(auth(config))

app.get("/secret", myMiddleware, (req, res) => {
    res.render("protected")
})


function myMiddleware(req, res, next) {
    if (req.oidc.isAuthenticated()) {
        next()
    }
    else {
        res.redirect("/")
    }
}

// app.get("/secret", myMiddleware, (req, res) => {
//     res.render("protected")
// })


app.get("/login", (req, res) => {
    // console.log(req.cookies)

    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=cc5286a815534790a94b21281df35e93')
        .then((res) => {
            return res.json()
        }).then((f_res) => {
            let newsArr = f_res.articles
            res.render("news.ejs", { news: f_res.articles })
        })
})

app.get("/logout", (req, res) => {
    res.redirect("/")
})






// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠ S E R V E R
const port = 3000
// const port = process.env.PORT || 3000
app.listen(port, (err) => { (err) ? console.log(err) : console.log("Server is running on port ", port) })