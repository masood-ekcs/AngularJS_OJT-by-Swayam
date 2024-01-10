const { auth } = require('express-openid-connect'); // This module helps us to implement OAuth standard in your nodeJs application. 
// const auth = ayush.auth
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.set("view engine", "ejs")


//// req.body = {fname: "Ayush", lname: "Addhyan", age: 22}

// let fname = req.body.fname
// let lname = req.body.lname


// let {fname, lname, age} = req.body // Object Destructuring 


const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.secret,
    baseURL: process.env.baseURL,
    clientID: process.env.clientID,
    issuerBaseURL: process.env.issuerBaseURL
};

// app.use mein hm ek function pass krte hai aur wo function ek middleware hota hai, middleware 




app.use(auth(config));
// App.use ke neeche jo bhi routes honge wo routes wale request sirf middleware se hoke gujrenge
// Mai specifically ek route ke liye bhi middleware likh skata hu, ya bhut saare routes ke liye bhi middleware likh sakta hu
// Auth0 aap jabhi bhi lagate ho toh ye middleware jo iske saath aati hai, ye by deafult do routes deti hai -- /login and /logout
// /login and /logout route 


// function middleware(req, res, next) {
//     console.log(req.oidc.user)
//     if (req.oidc.isAuthenticated()) {
//         next()
//     }
//     else {
//         res.redirect("/login")
//     }

// }

// Alag se middlware likhne se hmara code simplify 
// SOLID principles of OOPS - Managable code likhne mein help krta hai, aur code duplicacy ko bhi rokta hai


app.get("/", (req, res) => {
    res.render("index", { user: req.oidc.user, authorized: req.oidc.isAuthenticated() })
})


app.get("/route1", (req, res) => {
    res.render("page1")
})

app.get("/route2", (req, res) => {
    res.send("route2")
})


/*
function ekRouteWalaMiddleware(req, res, next) {
    // user Autheticated hai ya nahi
    next()
}

app.get("/routeX", ekRouteWalaMiddleware, (req, res) => {

})

app.get("/routeY", ekRouteWalaMiddleware, (req, res) => {

})

app.get("/routeZ", ekRouteWalaMiddleware, (req, res) => {

})

// Yahan pe saare routes mein jaane se pehle request middleware se hoke gujar rha hai aur hmko bina matlab ke ek aur parameter pass krna par rha hai
// App ek generalized case bana sakte ho app.use aur usko aap saare routes se upar likh sakte ho

app.use(ekRouteWalaMiddleware())


app.get("/routeX", (req, res) => {

})

app.get("/routeY", (req, res) => {

})

app.get("/routeZ", (req, res) => {

})

*/









// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠ S E R V E R
const port = 3000;
app.listen(port, (err) => { (err) ? console.log(err) : console.log("Server is running on port ", port) })