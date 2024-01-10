const express = require('express')
const app = express()
const { auth } = require('express-openid-connect')
const dotenv = require('dotenv')
const fetch = require('cross-fetch')
dotenv.config() // Environment variable ko load krdo .env file se
const PORT = process.env.PORT || 5000

app.set("view engine", "ejs")


const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.secret,
    baseURL: process.env.baseURL,
    clientID: process.env.clientID,
    issuerBaseURL: process.env.issuerBaseURL
};

app.use(auth(config));

app.get("/", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        return res.redirect("/console")
    }
    res.render("index", { user: undefined })
})


app.get("/console", async (req, res) => {

    if (req.oidc.isAuthenticated()) {
        let resp = await fetch("https://history.muffinlabs.com/date")
        let fres = await resp.json()
        // console.log(fres)
        let events = fres.data.Events
        res.render("console", { events, user: req.oidc.user })
    }
    else {
        res.redirect("/login")
    }

})



app.listen(PORT, (err) => {
    if (err)
        console.log(err)
    else
        console.log("Server is running on PORT:", PORT)
})