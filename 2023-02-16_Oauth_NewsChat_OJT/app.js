const express = require('express')
const app = express()
const { auth } = require('express-openid-connect')
const fetch = require('cross-fetch')
const dotenv = require('dotenv')
dotenv.config()


app.set("view engine", "ejs")
// app.use(express.json())

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.secret,
    baseURL: process.env.baseURL,
    clientID: process.env.clientID,
    issuerBaseURL: process.env.issuerBaseURL
};

app.use(auth(config));
// this will provide authentication ---> oidc.isAuthenticated()
// also the /login and /logout routes.

app.get("/", (req, res) => {
    res.render("index", { auth0: req.oidc.isAuthenticated() })
    // console.log(req.oidc.user)
})


// function myMiddleware(req, res, next) {
//     console.log(req.oidc.user)
//     if (req.oidc.isAuthenticated()) {
//         next()
//     }
//     else {
//         res.redirect("index.ejs")
//     }
// }


// app.get("/login", myMiddleware, (req, res) => {
//     res.render("protected")
// })


// app.get("/callback", (req, res) => {
//     console.log("Here11")
//     res.send("here1")
// })

// app.post("/callback", (req, res) => {
//     console.log("Here2")
//     res.send("Here2")
// })



app.get("/news", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=cc5286a815534790a94b21281df35e93')
            .then((res) => {
                return res.json()
            }).then((f_res) => {
                let newsArr = f_res.articles
                res.render("news.ejs", { news: newsArr, auth0: req.oidc.isAuthenticated() })
                // res.render("news.ejs")
            })
    }
    else {
        res.redirect("/login")
    }
})



app.get("/chat", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        res.render("chat.ejs", { auth0: req.oidc.isAuthenticated() })
        // res.render("chat.ejs")
    }
    else {
        res.redirect("/login")
    }
})





// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠ S E R V E R
const port = 3000
// const port = process.env.PORT || 3000
app.listen(port, (err) => { (err) ? console.log(err) : console.log("Server is running on http://localhost:" + port) })
